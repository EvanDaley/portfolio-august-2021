export default function Section() {
  const logoPath = document.location.origin + window.location.pathname + '/images/logo.png'

  return (
    <div className="header">
      <nav className="navbar">

        <div className="logo">
          <a href="https://evandaley.github.io/portfolio-august-2021/">
            <img src={logoPath} className="logo" alt="Logo" />
          </a>
        </div>

        <div className="nav-menu">
          <ol className="menu-ordered-list">
            <li>
              <a href="#about-me-section">About Me</a>
            </li>
            <li>
              Experience
            </li>
            <li>
              Frontend
            </li>
            <li>
              Backend
            </li>
            <li>
              Featured Projects
            </li>
            <li>
              Get in Touch
            </li>
          </ol>
        </div>
      </nav>
    </div>
  )
}