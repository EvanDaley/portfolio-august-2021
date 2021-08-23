// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import VideoSandbox from "./VideoSandbox"
import Section1 from "./Section1"
import AboutMe from "./AboutMe"
import Employment from "./Employment"
import Section4 from "./Section4"
import ContactMe from "./ContactMe"
import Header from "./Header"

function Layout() {

  return (
    <>
      <div className="html-content-container">

        <VideoSandbox />

        <Header/>

        <div id="content">
          <main className="content-container">
            <Section1/>
            <AboutMe/>
            <Employment/>
            {/* <Section4/> */}
            <ContactMe/>

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