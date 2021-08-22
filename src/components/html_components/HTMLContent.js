// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import VideoSandbox from "./VideoSandbox"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
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
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>

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