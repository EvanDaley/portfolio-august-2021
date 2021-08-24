import React, { useEffect, useRef } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import TextTransition, { presets } from "react-text-transition";

const TITLES = [
  'Full-Stack Engineer',
  '3D Enthusiast',
  'Forest Walker',
  'Potato Lover',
  'Software Architect',
];

function TypeWriterSubheading() {
  return (
    <TypeWriterEffect
      textStyle={
        {
          fontSize: '2vw',
          fontWeight: 'normal',
          textAlign: 'center'
        }
      }
      startDelay={1}
      multiText={TITLES}
      typeSpeed={40}
      multiTextDelay={1000}
      hideCursorAfterText={true}
      blink={true}
    />
  )
}

function TextTransitionSubheading() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1600
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      // inline={true}
      style={{
        // marginLeft: '15px'
      }}
      direction="up"
      text={TITLES[index % TITLES.length]}
      springConfig={presets.wobbly}
    />
  );
}

export default function Section() {
  return (
    <section className="section-1">
      <div className="centered-content">
        <h2>Evan Daley</h2>
        <h3>
          {/* <TypeWriterSubheading /> */}
          <TextTransitionSubheading />
        </h3>
      </div>
    </section>
  )
}


