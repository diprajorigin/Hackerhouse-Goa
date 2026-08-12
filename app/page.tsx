import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site">

      {/* NAVBAR */}
      <header className="navbar">

        <Link href="/" className="brand">
          <div className="brand-mark">
            HH
          </div>

          <div className="brand-text">
            <strong>HACKER HOUSE</strong>
            <span>GOA · 2026</span>
          </div>
        </Link>

        <div className="nav-right">
          <span className="nav-link">CHECK HYPE</span>

          <Link href="/builder" className="nav-button">
            CREATE
          </Link>
        </div>

      </header>


      {/* HERO */}
      <section className="hero">

        <div className="hero-palm hero-palm-right">
          🌴
        </div>

        <div className="hero-palm hero-palm-left">
          🌴
        </div>

        <div className="hero-inner">

          <div className="hero-kicker">
            HACKER HOUSE
          </div>

          <h1 className="hero-title">
            GOA<span>★</span>
          </h1>

          <p className="hero-description">
            You build things. You ship things.
            You break things. Now build yourself
            an official HH Goa 2026 Builder ID.
          </p>

          <div className="hero-details">

            <span>GOA, INDIA</span>

            <span>28 — 31 OCT 2026</span>

          </div>

          <Link
            href="/builder"
            className="hero-button"
          >
            CREATE MY BUILDER ID
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* MARQUEE */}
      <section className="marquee">

        <div className="marquee-track">
          BUILD SOMETHING ★ SHIP SOMETHING ★ BUILD SOMETHING ★
          SHIP SOMETHING ★ BUILD SOMETHING ★ SHIP SOMETHING ★
        </div>

      </section>


      {/* INTRO */}
      <section className="intro-section">

        <div className="intro-label">
          YOUR TURN
        </div>

        <div className="intro-grid">

          <h2>
            BUILD
            <br />
            YOUR ID<span>.</span>
          </h2>

          <div className="intro-right">

            <p>
              Upload a photo, tell us what you build
              and we'll turn it into your HH Goa 2026
              Builder Card.
            </p>

            <Link
              href="/builder"
              className="dark-button"
            >
              BUILD MY ID →
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURE STRIP */}
      <section className="feature-section">

        <div className="feature-card">
          <span>01</span>
          <strong>UPLOAD</strong>
          <p>Your photo</p>
        </div>

        <div className="feature-card">
          <span>02</span>
          <strong>BUILD</strong>
          <p>Your identity</p>
        </div>

        <div className="feature-card">
          <span>03</span>
          <strong>SHIP</strong>
          <p>Your Builder ID</p>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <strong>
          HACKER HOUSE · GOA · 2026
        </strong>

        <span>
          #FRAMEINGOA
        </span>

      </footer>

    </main>
  );
}