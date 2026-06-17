export type ConverterCategory = "document" | "image" | "audio" | "video" | "archive";

export interface Converter {
  from: string;
  to: string;
  label: string;
  slug: string;
  category: ConverterCategory;
  icon: string;
  description: string;
  acceptedMime: string[];
  maxSizeMB: number;
}

export const converters: Converter[] = [
  // Documents
  {
    from: "pdf", to: "jpg", label: "PDF to JPG", slug: "pdf-to-jpg",
    category: "document", icon: "📄",
    description: "Convert each page of your PDF into a high-quality JPG image.",
    acceptedMime: ["application/pdf"], maxSizeMB: 25,
  },
  {
    from: "jpg", to: "pdf", label: "JPG to PDF", slug: "jpg-to-pdf",
    category: "document", icon: "🖼️",
    description: "Combine one or more JPG images into a single PDF document.",
    acceptedMime: ["image/jpeg", "image/jpg"], maxSizeMB: 25,
  },
  {
    from: "png", to: "pdf", label: "PNG to PDF", slug: "png-to-pdf",
    category: "document", icon: "🖼️",
    description: "Convert PNG images into a PDF document.",
    acceptedMime: ["image/png"], maxSizeMB: 25,
  },
  // Images
  {
    from: "jpg", to: "png", label: "JPG to PNG", slug: "jpg-to-png",
    category: "image", icon: "🖼️",
    description: "Convert JPG/JPEG images to lossless PNG format.",
    acceptedMime: ["image/jpeg", "image/jpg"], maxSizeMB: 25,
  },
  {
    from: "png", to: "jpg", label: "PNG to JPG", slug: "png-to-jpg",
    category: "image", icon: "🖼️",
    description: "Convert PNG images to JPG format, reducing file size.",
    acceptedMime: ["image/png"], maxSizeMB: 25,
  },
  {
    from: "png", to: "webp", label: "PNG to WebP", slug: "png-to-webp",
    category: "image", icon: "🖼️",
    description: "Convert PNG to WebP for smaller web-optimized images.",
    acceptedMime: ["image/png"], maxSizeMB: 25,
  },
  {
    from: "jpg", to: "webp", label: "JPG to WebP", slug: "jpg-to-webp",
    category: "image", icon: "🖼️",
    description: "Convert JPG to WebP for better web performance.",
    acceptedMime: ["image/jpeg", "image/jpg"], maxSizeMB: 25,
  },
  {
    from: "webp", to: "png", label: "WebP to PNG", slug: "webp-to-png",
    category: "image", icon: "🖼️",
    description: "Convert WebP images back to universally supported PNG.",
    acceptedMime: ["image/webp"], maxSizeMB: 25,
  },
  {
    from: "webp", to: "jpg", label: "WebP to JPG", slug: "webp-to-jpg",
    category: "image", icon: "🖼️",
    description: "Convert WebP images to JPG for broad compatibility.",
    acceptedMime: ["image/webp"], maxSizeMB: 25,
  },
  {
    from: "heic", to: "jpg", label: "HEIC to JPG", slug: "heic-to-jpg",
    category: "image", icon: "📱",
    description: "Convert iPhone HEIC photos to universally compatible JPG.",
    acceptedMime: ["image/heic", "image/heif"], maxSizeMB: 25,
  },
  // Audio
  {
    from: "mp3", to: "wav", label: "MP3 to WAV", slug: "mp3-to-wav",
    category: "audio", icon: "🎵",
    description: "Convert MP3 audio files to uncompressed WAV format.",
    acceptedMime: ["audio/mpeg", "audio/mp3"], maxSizeMB: 50,
  },
  {
    from: "wav", to: "mp3", label: "WAV to MP3", slug: "wav-to-mp3",
    category: "audio", icon: "🎵",
    description: "Compress WAV audio to MP3 to reduce file size.",
    acceptedMime: ["audio/wav", "audio/x-wav"], maxSizeMB: 50,
  },
  {
    from: "m4a", to: "mp3", label: "M4A to MP3", slug: "m4a-to-mp3",
    category: "audio", icon: "🎵",
    description: "Convert M4A/AAC audio to the universal MP3 format.",
    acceptedMime: ["audio/m4a", "audio/mp4", "audio/x-m4a"], maxSizeMB: 50,
  },
  {
    from: "ogg", to: "mp3", label: "OGG to MP3", slug: "ogg-to-mp3",
    category: "audio", icon: "🎵",
    description: "Convert OGG Vorbis audio files to MP3.",
    acceptedMime: ["audio/ogg"], maxSizeMB: 50,
  },
  // Video
  {
    from: "mp4", to: "mp3", label: "MP4 to MP3", slug: "mp4-to-mp3",
    category: "video", icon: "🎬",
    description: "Extract the audio track from an MP4 video as an MP3 file.",
    acceptedMime: ["video/mp4"], maxSizeMB: 100,
  },
  {
    from: "mov", to: "mp4", label: "MOV to MP4", slug: "mov-to-mp4",
    category: "video", icon: "🎬",
    description: "Convert Apple QuickTime MOV videos to MP4.",
    acceptedMime: ["video/quicktime"], maxSizeMB: 100,
  },
  {
    from: "avi", to: "mp4", label: "AVI to MP4", slug: "avi-to-mp4",
    category: "video", icon: "🎬",
    description: "Convert AVI video files to the modern MP4 format.",
    acceptedMime: ["video/x-msvideo", "video/avi"], maxSizeMB: 100,
  },
  {
    from: "webm", to: "mp4", label: "WebM to MP4", slug: "webm-to-mp4",
    category: "video", icon: "🎬",
    description: "Convert WebM web videos to universally compatible MP4.",
    acceptedMime: ["video/webm"], maxSizeMB: 100,
  },
];

export const categoryLabels: Record<ConverterCategory, string> = {
  document: "Documents",
  image: "Images",
  audio: "Audio",
  video: "Video",
  archive: "Archives",
};

export const categoryColors: Record<ConverterCategory, string> = {
  document: "bg-blue-100 text-blue-700",
  image: "bg-purple-100 text-purple-700",
  audio: "bg-green-100 text-green-700",
  video: "bg-red-100 text-red-700",
  archive: "bg-yellow-100 text-yellow-700",
};

export function getConverter(slug: string): Converter | undefined {
  return converters.find((c) => c.slug === slug);
}

export function getConvertersByCategory(): Record<ConverterCategory, Converter[]> {
  const result = {} as Record<ConverterCategory, Converter[]>;
  for (const c of converters) {
    if (!result[c.category]) result[c.category] = [];
    result[c.category].push(c);
  }
  return result;
}
