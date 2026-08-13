"use client";

import { useRef } from "react";

interface UploadZoneProps {
  onImageSelect: (image: string) => void;
}

export default function UploadZone({
  onImageSelect,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onImageSelect(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        event.preventDefault();
        processFile(event.dataTransfer.files?.[0]);
      }}
      className="cursor-pointer border-2 border-dashed border-[#FFD600] p-10 text-center transition-all duration-200 hover:bg-[#FFD600]/10"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/heic,image/heif"
        className="hidden"
        onChange={(event) => {
          processFile(event.target.files?.[0]);
        }}
      />

      <div className="text-5xl">📸</div>

      <p className="mt-5 font-black uppercase tracking-wide">
        Drop your photo here
      </p>

      <p className="mt-2 text-sm text-white/60">
        or click to browse
      </p>

      <div className="mt-5 flex justify-center gap-2">
        <span className="border border-white/30 px-3 py-1 text-[10px] font-bold">
          JPG
        </span>

        <span className="border border-white/30 px-3 py-1 text-[10px] font-bold">
          PNG
        </span>

        <span className="border border-white/30 px-3 py-1 text-[10px] font-bold">
          HEIC
        </span>
      </div>
    </div>
  );
}