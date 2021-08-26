import React, { useEffect, useRef } from 'react';
import SphereScene from '../three_components/scenes/SphereScene'

const restVideo2 = document.location.origin + window.location.pathname + '/video/containers2.mp4'

export default function Section() {
  console.log(restVideo2)

  const canvasStyles = {
    position: 'absolute',
    top: '0px',
    zIndex: '50',
    height: '100%'
  }

  return (
    <section className="rest-section">
      <div className="rest-section-inner-container">
        <video autoPlay muted loop className="rest-video" key={restVideo2}>
          <source src={restVideo2} type="video/mp4"/>
        </video>
        {/* <SphereScene canvasStyles={canvasStyles} /> */}
      </div>
    </section>
  )
}
