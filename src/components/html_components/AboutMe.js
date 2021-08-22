import React, { useEffect, useRef } from 'react';

function LabeledHeading({ prefix, label }) {
  return (
    <h2 className="section-label">
      <span className="highlight">{prefix}. </span>
      <span>{label}</span>
    </h2>
  )
}

function Bio() {
  return (
    <div>
      <p style={{marginTop: '0px'}}>
        Hi, I'm Evan Daley, a developer, leader and software architect. 
        I love building digital experiences, working with big data, and solving complex challenges.
        {/* I love programming and have pursued it diligently for the last fifteen years. */}
        {/* &nbsp;I have pursued this field diligently from a young age, and I'm eager to keep growing my skillset. */}
        <br />
        <br />
        Recently, I've had the privilege of working for a few really cool tech companies in the Pacific Northwest.
        At <a href="https://www.kaspien.com/software/" target="_blank" className="highlight underline">Kaspien</a> our Saas systems have driven over
        <span className="highlight" style={{ margin: '0px' }}>
          &nbsp;1B&nbsp;
        </span> in sales.
        At <a href="https://www.twobarrels.com/" target="_blank" className="highlight underline">Two Barrels</a> our software has helped customers form over
        <span className="highlight">&nbsp;1M</span>&nbsp;companies in the US.&nbsp;
        {/* During weekends at <a href="https://www.nucamp.co/" target="_blank" className="highlight underline">Nucamp</a>&nbsp; */}
        {/* I've also done a bunch of freelance work and led over 60 workshops with Nucamp, on the basics and best practices of MERN software development. */}
        <br />
        <br />
        My main focus these days is fullstack software development, primarly for Saas-driven businesses.
        {/* I love building digital experiences, working with big data, and solving complex challenges. */}
        &nbsp;Some of my favorite tools are React, Rails, Vue, AWS, docker, and anything SQL -
        but I invest a lot of time in learning other stacks and I've worked with quite a few professionally.
      </p>
    </div>
  )
}

function Avatar() {
  const imgPath = document.location.origin + window.location.pathname + '/images/profile.png'

  return (
    <img src={imgPath} className="avatar" />
  )
}

export default function Section() {
  return (
    <section id="about-me-section" className="section-2">
      <div className="about-me">
        <LabeledHeading  prefix="01"  label="About Me"  id="about_me"/>

        <div className="font-twenty flex-container">
          <Bio />
          <Avatar />
        </div>
      </div>
    </section>
  )
}


