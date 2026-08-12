"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BuilderPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");

  const handlePhoto = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("Please choose an image below 10MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  };


  const handleGenerate = () => {

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!role.trim()) {
      alert("Please enter your stack / role.");
      return;
    }

    localStorage.setItem(
      "hh-builder-data",
      JSON.stringify({
        name,
        role,
        photo,
      })
    );

    router.push("/generate");
  };


  return (
    <main className="builder-page">

      {/* HEADER */}

      <header className="builder-nav">

        <Link href="/" className="builder-brand">

          <div className="builder-brand-mark">
            HH
          </div>

          <div>
            <strong>HACKER HOUSE</strong>
            <span>GOA · 2026</span>
          </div>

        </Link>

        <Link
          href="/"
          className="builder-home"
        >
          ← HOME
        </Link>

      </header>


      {/* CONTENT */}

      <section className="builder-content">

        <div className="builder-heading">

          <span>
            YOUR TURN
          </span>

          <h1>
            BUILD
            <br />
            YOUR ID<span>.</span>
          </h1>

          <p>
            Tell us who you are.
            We'll turn it into your official
            Hacker House Goa 2026 Builder Pass.
          </p>

        </div>


        {/* FORM CARD */}

        <section className="builder-card">

          <div className="builder-card-header">

            <div>
              <span>BUILDER ID GENERATOR</span>
              <strong>01 / 03</strong>
            </div>

          </div>


          <h2>
            Who are you?
          </h2>

          <p className="builder-card-description">
            Start with the basics. The magic comes next.
          </p>


          {/* PHOTO */}

          <label className="upload-zone">

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              onChange={handlePhoto}
            />

            {photo ? (

              <div className="upload-success">

                <img
                  src={photo}
                  alt="Uploaded builder"
                />

                <div>
                  <strong>
                    PHOTO READY ✓
                  </strong>

                  <span>
                    Click to replace
                  </span>
                </div>

              </div>

            ) : (

              <div className="upload-empty">

                <div className="upload-icon">
                  ↑
                </div>

                <strong>
                  DROP YOUR PHOTO
                </strong>

                <span>
                  or click to browse
                </span>

                <small>
                  JPG · PNG · WEBP · MAX 10MB
                </small>

              </div>

            )}

          </label>


          {/* NAME */}

          <div className="input-group">

            <label>
              FULL NAME
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="e.g. Dipraj Biswas"
            />

          </div>


          {/* ROLE */}

          <div className="input-group">

            <label>
              STACK / ROLE
            </label>

            <input
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              placeholder="e.g. Full-Stack / AI / Founder"
            />

          </div>


          {/* BUTTON */}

          <button
            className="generate-button"
            onClick={handleGenerate}
          >
            GENERATE MY PASS
            <span>→</span>
          </button>


          <div className="form-note">

            <span>NO LOGIN</span>
            <i>•</i>
            <span>FREE</span>
            <i>•</i>
            <span>INSTANT</span>

          </div>

        </section>

      </section>

    </main>
  );
}