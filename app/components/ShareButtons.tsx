"use client";

import React, { useState } from "react";
import { toPng } from "html-to-image";

type ShareButtonsProps = {
  cardRef: React.RefObject<HTMLElement | null>;
  name: string;
};

export default function ShareButtons({
  cardRef,
  name,
}: ShareButtonsProps) {
  const [downloading, setDownloading] = useState(false);

  const downloadPass = async () => {
    if (!cardRef.current) return;

    try {
      setDownloading(true);

      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor: "#fff8df",
      });

      const link = document.createElement("a");

      link.download = `HH-Goa-2026-${name
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`;

      link.href = dataUrl;

      link.click();
    } catch (error) {
      console.error("Failed to download pass:", error);

      alert("Couldn't generate the image. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const shareToX = () => {
    const text = [
      `Just built my Hacker House Goa 2026 Builder ID 🏝️`,
      "",
      `I'm ready to build, ship & break things.`,
      "",
      "#FrameInGoa #HackerHouse",
    ].join("\n");

    const url =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer,width=700,height=600"
    );
  };

  const copyShareText = async () => {
    const text =
      `Just built my Hacker House Goa 2026 Builder ID 🏝️ #FrameInGoa #HackerHouse`;

    try {
      await navigator.clipboard.writeText(text);

      alert("Share text copied!");
    } catch {
      alert("Couldn't copy text.");
    }
  };

  return (
    <div className="pass-actions">

      <button
        type="button"
        className="pass-action primary"
        onClick={downloadPass}
        disabled={downloading}
      >
        {downloading ? "GENERATING..." : "↓ DOWNLOAD PASS"}
      </button>

      <button
        type="button"
        className="pass-action"
        onClick={shareToX}
      >
        𝕏 SHARE TO X
      </button>

      <button
        type="button"
        className="pass-action"
        onClick={copyShareText}
      >
        ⧉ COPY SHARE TEXT
      </button>

      <button
        type="button"
        className="pass-action"
        onClick={() => window.location.href = "/builder"}
      >
        ↻ CREATE ANOTHER
      </button>

    </div>
  );
}