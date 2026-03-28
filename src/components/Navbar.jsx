import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          97 <span>Sim Racing</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/kegiatan">
                Activity
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/championship">
                Championship
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/schedule">
                Schedule
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="standingsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Standings
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="standingsDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#1htrophy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1H Trophy
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#openwheeltrophy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Wheel Trophy
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mt-2 mt-lg-0">
              <a className="btn btn-brand ms-lg-2" href="#join">
                Join Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
