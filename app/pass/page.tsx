"use client";

import { useEffect, useState } from "react";
import BuilderCard from "../components/BuilderCard";
import ShareButtons from "../components/ShareButtons";

type BuilderData = {
  name: string;
  stack: string;
  photo: string;
  builderClass: string;
  builderId: string;
};

export default function PassPage() {
  const [data, setData] = useState<BuilderData>({
    name: "YOUR NAME",
    stack: "YOUR STACK",
    photo: "",
    builderClass: "FRONTIER BUILDER",
    builderId: "HH-GOA-2026",
  });

  useEffect(() => {
    const saved = localStorage.getItem("hh-builder-data");

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setData({
        name: parsed.name || "YOUR NAME",
        stack: parsed.stack || "YOUR STACK",
        photo: parsed.photo || "",
        builderClass:
          parsed.builderClass || "FRONTIER BUILDER",
        builderId:
          parsed.builderId || "HH-GOA-2026",
      });
    } catch (error) {
      console.error(
        "Could not load builder data:",
        error
      );
    }
  }, []);

  return (
    <main className="pass-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="pass-header">

        <div className="pass-header-brand">
          <span className="pass-brand-box">
            HH
          </span>

          <div>
            <strong>HACKER HOUSE</strong>
            <small>GOA · 2026</small>
          </div>
        </div>

        <div className="pass-header-right">
          <span>YOUR BUILDER ID</span>
          <span className="pass-header-star">
            ★
          </span>
        </div>

      </header>


      {/* =========================================
          MAIN
      ========================================= */}

      <section className="pass-main">

        <div className="pass-intro">

          <p className="pass-eyebrow">
            BUILDER ID · 01
          </p>

          <h1 className="pass-title">
            YOU&apos;RE
            <br />
            <span>IN.</span>
          </h1>

          <p className="pass-description">
            Your official Hacker House Goa 2026
            Builder ID is ready.
          </p>

          <div className="pass-meta">
            <span>GOA, INDIA</span>
            <span>28 — 31 OCT 2026</span>
          </div>

        </div>


        {/* =====================================
            CARD
        ===================================== */}

        <div className="pass-card-wrapper">

          <div className="pass-card-label">
            YOUR BUILDER CARD
            <span>HH-GOA-2026</span>
          </div>

          <BuilderCard
            name={data.name}
            stack={data.stack}
            photo={data.photo}
            builderClass={data.builderClass}
            builderId={data.builderId}
          />

        </div>


        {/* =====================================
            ACTIONS
        ===================================== */}

        <div className="pass-actions">

          <ShareButtons
            cardId="builder-id-card"
            name={data.name}
          />

          <button
            type="button"
            className="pass-button create-another-button"
            onClick={() => {
              window.location.href = "/builder";
            }}
          >
            ↻ CREATE ANOTHER PASS
          </button>

        </div>


        {/* =====================================
            SHARE MESSAGE
        ===================================== */}

        <div className="pass-share-note">

          <span className="pass-share-star">
            ★
          </span>

          <div>
            <strong>
              MAKE SOMETHING WORTH SHARING.
            </strong>

            <p>
              Download your Builder ID, post it,
              and tag <b>#FrameInGoa</b>.
            </p>
          </div>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="pass-footer">

        <span>HACKER HOUSE GOA 2026</span>

        <span>•</span>

        <span>BUILD IN GOA</span>

        <span>•</span>

        <span>SHIP FROM PARADISE</span>

        <span>•</span>

        <span>#FRAMEINGOA</span>

      </footer>

    </main>
  );
}