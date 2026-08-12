"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GeneratePage() {

  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/pass");
    }, 3500);

    return () => clearTimeout(timer);

  }, [router]);


  return (
    <main className="generate-page">

      <div className="generate-center">

        <div className="generate-brand">
          HH
        </div>

        <div className="generate-year">
          GOA · 2026
        </div>


        <div className="loader">

          <div className="loader-circle" />

        </div>


        <h1>
          BUILDING
          <br />
          YOUR ID.
        </h1>


        <p>
          Initializing Builder Profile...
        </p>


        <div className="generation-status">

          <span>
            PHOTO
          </span>

          <span>
            PROFILE
          </span>

          <span>
            DESIGN
          </span>

          <span>
            READY
          </span>

        </div>

      </div>

    </main>
  );
}