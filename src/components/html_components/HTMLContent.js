// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import VideoSandbox from "./VideoSandbox"

function Layout() {
  const logoPath = window.location.href + '/images/logo.png'

  return (
    <>
      <div className="html-content-container">

        <VideoSandbox />

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
                  About
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

        <div className="no-bg">
          <div className="section-1">
            {/* <h3>Full Stack Software Developer</h3> */}
            <h2>Evan Daley</h2>
          </div>
        </div>

        <div id="content">
          <main className="content-container">
            <section className="section-1">
              <div>
                <p>test</p>
              </div>
            </section>

            <section className="section-2">
              <div>
                <p>test</p>
              </div>
            </section>

            <section className="section-3">
              <div>
                <p>test</p>
              </div>
            </section>

            <section className="section-4">
              <div>
                <p>test</p>
              </div>
            </section>

            <section className="section-5">
              <div>
                <p>test</p>
              </div>
            </section>
          </main>
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