import './App.css';
import VideoSandbox from "./components/html_components/VideoSandbox"
import Section1 from "./components/html_components/HeroSection"
import AboutMe from "./components/html_components/AboutMe"
import Employment from "./components/html_components/Employment"
import Rest1 from "./components/html_components/Rest1"
import Rest2 from "./components/html_components/Rest2"
import ContactMe from "./components/html_components/ContactMe"
import Header from "./components/html_components/Header"
import EmptySection from "./components/html_components/EmptySection"

function App() {
  return (
    <>
      <div className="html-content-container">
        <VideoSandbox />
        <Header />
        <div id="content">
          <main className="content-container">
            <Section1 />
            <AboutMe />
            <Employment />
            {/* <Rest2 /> */}
            <ContactMe />
            {/* <Rest1 /> */}
            <EmptySection />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
