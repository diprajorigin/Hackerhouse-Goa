"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BuilderData = {
  name: string;
  role: string;
  photo: string;
};

export default function PassPage() {

  const [data, setData] =
    useState<BuilderData | null>(null);


  useEffect(() => {

    const saved =
      localStorage.getItem("hh-builder-data");

    if (saved) {
      setData(JSON.parse(saved));
    }

  }, []);


  if (!data) {

    return (
      <main className="pass-loading">
        LOADING BUILDER ID...
      </main>
    );

  }


  return (
    <main className="pass-page">

      {/* HEADER */}

      <header className="pass-nav">

        <Link
          href="/"
          className="pass-logo"
        >
          HH
          <span>GOA · 2026</span>
        </Link>

        <Link
          href="/builder"
          className="pass-create"
        >
          CREATE ANOTHER
        </Link>

      </header>


      {/* HERO */}

      <section className="pass-hero">

        <div className="pass-eyebrow">
          IT'S OFFICIAL
        </div>

        <h1>
          YOUR
          <br />
          BUILDER ID<span>.</span>
        </h1>

        <p>
          You built something.
          You shipped something.
          Now show the internet you were here.
        </p>

      </section>


      {/* CARD */}

      <section className="id-wrapper">

        <div className="id-card">

          {/* CARD HEADER */}

          <div className="id-top">

            <div>

              <strong>
                HACKER
                <br />
                HOUSE
              </strong>

              <span>
                GOA · 2026
              </span>

            </div>

            <div className="id-star">
              ★
            </div>

          </div>


          {/* EVENT */}

          <div className="id-event">

            <span>
              GOA, INDIA
            </span>

            <span>
              28 — 31 OCT 2026
            </span>

          </div>


          {/* PHOTO */}

          <div className="id-photo">

            {data.photo ? (

              <img
                src={data.photo}
                alt={data.name}
              />

            ) : (

              <div className="id-photo-placeholder">
                BUILDER
              </div>

            )}

          </div>


          {/* NAME */}

          <div className="id-name">
            {data.name}
          </div>


          {/* ROLE */}

          <div className="id-role">
            {data.role}
          </div>


          {/* INFORMATION */}

          <div className="id-details">

            <div>
              <small>
                BUILDER CLASS
              </small>

              <strong>
                TERMINAL BUILDER
              </strong>
            </div>

            <div>
              <small>
                LOCATION
              </small>

              <strong>
                GOA, INDIA
              </strong>
            </div>

            <div>
              <small>
                STATUS
              </small>

              <strong>
                BUILDING
              </strong>
            </div>

            <div>
              <small>
                ID
              </small>

              <strong>
                HH-GOA-2026
              </strong>
            </div>

          </div>


          {/* CARD FOOTER */}

          <div className="id-bottom">

            <strong>
              BUILD · SHIP · REPEAT
            </strong>

            <span>
              #FRAMEINGOA
            </span>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="pass-actions">

          <button
            onClick={() => window.print()}
          >
            ↓ SAVE / PRINT PASS
          </button>


          <button
            onClick={() => {

              if (navigator.share) {

                navigator.share({
                  title:
                    "My Hacker House Goa 2026 Builder ID",
                  text:
                    "I built something at Hacker House Goa 2026.",
                  url:
                    window.location.href,
                });

              } else {

                navigator.clipboard.writeText(
                  window.location.href
                );

                alert("Link copied!");

              }

            }}
          >
            ↗ SHARE MY PASS
          </button>


          <Link href="/builder">
            ↻ GENERATE ANOTHER
          </Link>

        </div>

      </section>


      <footer className="pass-footer">
        HACKER HOUSE GOA 2026 · BUILD IN GOA · SHIP FROM PARADISE
      </footer>

    </main>
  );
}