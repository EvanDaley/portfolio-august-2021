import React, { useEffect, useRef } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Section() {

  return (
    <section className="section-1">
      <div className="centered-content">
        <h2>Evan Daley</h2>
        <h3>
          <TypeWriterEffect
            textStyle={
              { 
                fontSize: '2vw',
                fontWeight: 'normal',
                textAlign: 'center'
              }
            }
            startDelay={1}
            multiText={[
              'Full-Stack Engineer',
              '3D Enthusiast',
              'Software Architect',
            ]}
            typeSpeed={40}
            multiTextDelay={1000}
            hideCursorAfterText={true}
            blink={true}
          />
          {/* Full-Stack Engineer */}

        </h3>
      </div>
    </section>
  )
}


