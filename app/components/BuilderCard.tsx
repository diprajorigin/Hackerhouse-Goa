"use client";

import React, { forwardRef } from "react";

export type BuilderCardProps = {
  name: string;
  stack: string;
  photo?: string;
  builderClass?: string;
  builderId?: string;
};

const BuilderCard = forwardRef<HTMLDivElement, BuilderCardProps>(
  (
    {
      name,
      stack,
      photo,
      builderClass = "GENESIS BUILDER",
      builderId = "HH-GOA-2026",
    },
    ref
  ) => {
    return (
      <div ref={ref} className="id-card-scene">
        <div className="id-card">

          {/* TOP BRAND STRIP */}
          <div className="id-card-top">

            <div className="id-brand">
              <div className="id-brand-mark">HH</div>

              <div>
                <div className="id-brand-name">
                  HACKER HOUSE
                </div>

                <div className="id-brand-sub">
                  GOA · 2026
                </div>
              </div>
            </div>

            <div className="id-edition">
              BUILDER
              <br />
              PASS
            </div>

          </div>

          {/* DECORATIVE STAMP */}
          <div className="id-stamp">
            <span>BUILD</span>
            <strong>✦</strong>
            <span>SHIP</span>
          </div>

          {/* HERO */}
          <div className="id-card-hero">

            <div className="id-eyebrow">
              OFFICIAL BUILDER IDENTIFICATION
            </div>

            <h1>
              HACKER
              <br />
              <span>HOUSE</span>
            </h1>

            <div className="id-goa-tag">
              GOA
              <span>28 — 31 OCT 2026</span>
            </div>

          </div>

          {/* PHOTO */}
          <div className="id-photo-wrap">

            <div className="id-photo-frame">

              {photo ? (
                <img
                  src={photo}
                  alt={name}
                  className="id-photo"
                />
              ) : (
                <div className="id-photo-placeholder">
                  HH
                </div>
              )}

            </div>

            <div className="id-photo-caption">
              BUILDER
            </div>

          </div>

          {/* PERSONAL INFORMATION */}
          <div className="id-info">

            <div className="id-info-row">
              <span>NAME</span>
              <strong>{name || "YOUR NAME"}</strong>
            </div>

            <div className="id-info-row">
              <span>STACK</span>
              <strong>{stack || "BUILDER"}</strong>
            </div>

            <div className="id-class-box">

              <div className="id-class-label">
                BUILDER CLASS
              </div>

              <div className="id-class">
                {builderClass}
              </div>

            </div>

          </div>

          {/* FOOTER */}
          <div className="id-card-footer">

            <div>
              <span>BUILD SOMETHING</span>
              <span>SHIP SOMETHING</span>
              <span>BREAK SOMETHING</span>
            </div>

            <div className="id-number">
              {builderId}
            </div>

          </div>

          {/* HASHTAG */}
          <div className="id-hashtag">
            #FRAMEINGOA
          </div>

          {/* DECORATIVE CORNERS */}
          <div className="id-corner id-corner-tl" />
          <div className="id-corner id-corner-tr" />
          <div className="id-corner id-corner-bl" />
          <div className="id-corner id-corner-br" />

        </div>
      </div>
    );
  }
);

BuilderCard.displayName = "BuilderCard";

export default BuilderCard;