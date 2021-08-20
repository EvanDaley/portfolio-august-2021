// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

function Layout() {
  return (
    <>
      <div className="html-content-container">
        <div className="header">
          <nav className="navbar">

            <div className="logo">
              <a href="https://evandaley.github.io/portfolio-august-2021/">
                E {/* <svg></svg> */}
              </a>
            </div>

            <div className="nav-menu">
              <ol className="menu-ordered-list">
                <li>
                  About
                </li>
                <li>
                  Experience
                </li>
                <li>
                  Frontend
                </li>
                {/* <li>
                  Backend
                </li>
                <li>
                  Data
                </li>
                <li>
                  Architecture
                </li>
                <li>
                  Featured Projects
                </li> */}
                <li>
                  Get in Touch
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default function HTMLContent() {
  return (
    <>
      <Layout />
    </>
  )
}