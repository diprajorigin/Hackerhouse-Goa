"use client";

interface PhotoPreviewProps {
  image: string;
  onRemove: () => void;
}

export default function PhotoPreview({
  image,
  onRemove,
}: PhotoPreviewProps) {
  return (
    <div className="relative overflow-hidden border-4 border-[#FFD600] bg-[#034C2C]">
      <img
        src={image}
        alt="Uploaded builder"
        className="h-[420px] w-full object-cover object-center"
      />

      <div className="absolute left-4 top-4 bg-[#FF1687] px-3 py-2 text-xs font-black uppercase text-white">
        YOUR PHOTO
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onRemove();
        }}
        className="absolute bottom-4 right-4 border-2 border-[#034C2C] bg-[#FFD600] px-4 py-2 text-xs font-black uppercase text-[#034C2C] transition-transform hover:-translate-y-1"
      >
        Replace Photo
      </button>
    </div>
  );
}