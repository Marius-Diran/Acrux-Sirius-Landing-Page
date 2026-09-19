import { Icon } from "./Icons.jsx";
import founderPhoto from "../assets/founder-image.jpg";

export default function Founder() {
  return (
    <section className="founder section" id="founder">
      <div className="container founder-grid">
        <div className="founder-portrait-wrap">
          <img
            className="founder-portrait"
            src={founderPhoto}
            alt="Founder portrait"
          />
        </div>

        <div className="founder-copy">
          <p className="section-kicker">ABOUT THE FOUNDER</p>
          <h2>
            Visionary. Creator. <span>Builder.</span>
          </h2>
          <p>
            Sile is a visionary entrepreneur and creative leader passionate
            about building solutions that inspire, empower and transform lives.
            Through Acrux Sirius Technologies and its subsidiaries, he is
            committed to creating a legacy of innovation, impact and excellence.
          </p>
          <a className="pill-button compact" href="#about">
            <span>Read Full Story</span>
            <span className="button-arrow">
              <Icon name="arrow" size={14} />
            </span>
          </a>
        </div>

        <blockquote className="founder-quote">
          <span className="quote-mark">“</span>
          <p>
            We don't just build companies, we build ecosystems that{" "}
            <em>create opportunities</em> and shape the future.
          </p>
          <span className="quote-star">✦</span>
        </blockquote>
      </div>
    </section>
  );
}
