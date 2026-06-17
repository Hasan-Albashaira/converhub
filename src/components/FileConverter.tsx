"use client";
import { useState, useRef, useCallback } from "react";
import type { Converter } from "@/lib/converters";

type Status = "idle" | "uploading" | "converting" | "done" | "error";

interface ConvertResult {
  downloadUrl: string;
  filename: string;
}

export default function FileConverter({ converter }: { converter: Converter }) {
  const [status, setStatus] = useState<Status>("idle");
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ConvertResult | null>(null);
  const [error, setError] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setStatus("idle");
    setFile(null);
    setResult(null);
    setError("");
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleFile = useCallback(
    (f: File) => {
      const maxBytes = converter.maxSizeMB * 1024 * 1024;
      if (f.size > maxBytes) {
        setError(`File too large. Maximum size is ${converter.maxSizeMB} MB.`);
        setStatus("error");
        return;
      }
      setFile(f);
      setStatus("idle");
      setError("");
      setResult(null);
    },
    [converter.maxSizeMB]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const convert = async () => {
    if (!file) return;
    setStatus("uploading");
    setProgress(10);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("from", converter.from);
    formData.append("to", converter.to);

    try {
      setProgress(30);
      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      setProgress(80);
      setStatus("converting");

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Conversion failed. Please try again.");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const filename =
        res.headers.get("X-Filename") ||
        file.name.replace(/\.[^.]+$/, `.${converter.to}`);

      setResult({ downloadUrl: url, filename });
      setProgress(100);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status !== "done" && (
        <div
          className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${
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
            className="hidden"
            accept={converter.acceptedMime.join(",")}
            onChange={onInputChange}
          />

          {file ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                {converter.icon}
              </div>
              <p className="font-semibold text-slate-800 text-lg truncate max-w-xs">{file.name}</p>
              <p className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <button
                onClick={(e) => { e.stopPropagation(); reset(); }}
                className="text-xs text-slate-400 hover:text-red-500 underline mt-1"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-700">
                  Drop your {converter.from.toUpperCase()} file here
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  or <span className="text-indigo-600 font-medium">click to browse</span>
                </p>
              </div>
              <p className="text-xs text-slate-400">Max {converter.maxSizeMB} MB · Free tier</p>
            </div>
          )}
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-medium text-red-800">{error}</p>
            <button onClick={reset} className="text-xs text-red-600 underline mt-1">Try again</button>
          </div>
        </div>
      )}

      {(status === "uploading" || status === "converting") && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>{status === "uploading" ? "Uploading..." : "Converting..."}</span>
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

      {status === "done" && result && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-green-800 mb-1">Conversion Complete!</h3>
          <p className="text-sm text-green-700 mb-5">Your file is ready to download.</p>
          <a
            href={result.downloadUrl}
            download={result.filename}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download {result.filename}
          </a>
          <button onClick={reset} className="block mx-auto mt-4 text-sm text-slate-500 hover:text-slate-700 underline">
            Convert another file
          </button>
          <p className="text-xs text-slate-400 mt-4">File will be auto-deleted from our servers in 1 hour.</p>
        </div>
      )}

      {file && status === "idle" && (
        <button
          onClick={convert}
          className="mt-5 w-full py-3.5 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200"
        >
          Convert to {converter.to.toUpperCase()} →
        </button>
      )}
    </div>
  );
}
