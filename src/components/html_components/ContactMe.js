import React, { useEffect, useRef } from 'react';
import SectionHeading from "./SectionHeading"

export default function Section() {
  return (
    <section id="contact-me" className="section-2">
      <div className="content-section">
        <SectionHeading prefix="03" label="What’s Next?" />
        <p className="font-twenty">
          Although I'm not actively looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
          <br />
          <br />
          daley.evan@gmail.com
        </p>
      </div>

    </section>
  )
}


