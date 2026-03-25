export default function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>© 2026 97 Sim Racing Community. All rights reserved.</div>

        <div className="social-icons d-flex align-items-center gap-3">
          <a
            href="https://www.instagram.com/97simracing/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://s.id/97SimRacing"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-discord"></i>
          </a>

          <a
            href="https://www.youtube.com/@97SimRacingCommunity"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
