"use client";
import { useState, useRef, useCallback } from "react";

interface FileItem {
  id: string;
  file: File;
  preview: string;
}

type Status = "idle" | "merging" | "done" | "error";

const ACCEPTED_MIME = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "image/heic",
  "image/heif",
];

const MAX_FILES = 20;
const MAX_TOTAL_MB = 50;

export default function MultiImageToPdfConverter() {
  const [items, setItems] = useState<FileItem[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uid = () => Math.random().toString(36).slice(2);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const arr = Array.from(incoming);
    const valid = arr.filter((f) => ACCEPTED_MIME.includes(f.type));
    if (valid.length !== arr.length) {
      setError("Some files were skipped — only image formats (JPG, PNG, WebP, GIF, BMP, TIFF) are accepted.");
    } else {
      setError("");
    }
    setItems((prev) => {
      const next = [
        ...prev,
        ...valid.map((f) => ({
          id: uid(),
          file: f,
          preview: URL.createObjectURL(f),
        })),
      ].slice(0, MAX_FILES);
      return next;
    });
    setStatus("idle");
    setDownloadUrl("");
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const removeItem = (id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.preview);
      return prev.filter((i) => i.id !== id);
    });
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setItems((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const moveDown = (index: number) => {
    setItems((prev) => {
      if (index === prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const merge = async () => {
    if (items.length === 0) return;

    const totalMB = items.reduce((s, i) => s + i.file.size, 0) / 1024 / 1024;
    if (totalMB > MAX_TOTAL_MB) {
      setError(`Total size ${totalMB.toFixed(1)} MB exceeds the ${MAX_TOTAL_MB} MB limit.`);
      setStatus("error");
      return;
    }

    setStatus("merging");
    setProgress(20);
    setError("");

    const formData = new FormData();
    items.forEach((item) => formData.append("files", item.file));

    try {
      setProgress(40);
      const res = await fetch("/api/merge-images-to-pdf", {
        method: "POST",
        body: formData,
      });

      setProgress(80);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || "Merge failed. Please try again.");
      }

      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      setProgress(100);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
  };

  const reset = () => {
    items.forEach((i) => URL.revokeObjectURL(i.preview));
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    setItems([]);
    setStatus("idle");
    setError("");
    setProgress(0);
    setDownloadUrl("");
    if (inputRef.current) inputRef.current.value = "";
  };

  if (status === "done") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-800 mb-1">PDF Created!</h3>
        <p className="text-sm text-green-700 mb-5">
          {items.length} image{items.length !== 1 ? "s" : ""} merged into one PDF.
        </p>
        <a
          href={downloadUrl}
          download="merged-images.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download merged-images.pdf
        </a>
        <button
          onClick={reset}
          className="block mx-auto mt-4 text-sm text-slate-500 hover:text-slate-700 underline"
        >
          Start over
        </button>
        <p className="text-xs text-slate-400 mt-4">
          File will be auto-deleted from our servers in 1 hour.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Drop zone */}
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer mb-6 ${
          dragActive
            ? "border-indigo-500 bg-indigo-50"
            : "border-slate-300 bg-slate-50 hover:border-indigo-400 hover:bg-indigo-50/40"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_MIME.join(",")}
          className="hidden"
          onChange={(e) => { if (e.target.files?.length) addFiles(e.target.files); }}
        />
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-700">
              {items.length > 0 ? "Add more images" : "Drop your images here"}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              or <span className="text-indigo-600 font-medium">click to browse</span>
            </p>
          </div>
          <p className="text-xs text-slate-400">
            JPG, PNG, WebP, GIF, BMP, TIFF · Max {MAX_FILES} images · {MAX_TOTAL_MB} MB total
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* File list */}
      {items.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700">
              {items.length} image{items.length !== 1 ? "s" : ""} selected
              {items.length < MAX_FILES && (
                <span className="text-slate-400 font-normal ml-1">
                  · {MAX_FILES - items.length} more allowed
                </span>
              )}
            </p>
            <button
              onClick={reset}
              className="text-xs text-red-500 hover:text-red-700 underline"
            >
              Clear all
            </button>
          </div>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl"
              >
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.preview}
                  alt={item.file.name}
                  className="w-12 h-12 object-cover rounded-lg shrink-0 bg-slate-100"
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{item.file.name}</p>
                  <p className="text-xs text-slate-400">
                    {(item.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                {/* Page indicator */}
                <span className="text-xs text-slate-400 font-medium w-10 text-center shrink-0">
                  p.{index + 1}
                </span>
                {/* Reorder buttons */}
                <div className="flex flex-col gap-0.5 shrink-0">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    title="Move up"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === items.length - 1}
                    className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    title="Move down"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                  title="Remove image"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress bar */}
      {status === "merging" && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Merging images into PDF...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Merge button */}
      {items.length > 0 && status !== "merging" && (
        <button
          onClick={merge}
          className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200"
        >
          Merge {items.length} image{items.length !== 1 ? "s" : ""} into PDF →
        </button>
      )}
    </div>
  );
}
