import React, { useEffect, useRef } from 'react';
import SphereScene from '../three_components/scenes/SphereScene'

const restImage = document.location.origin + window.location.pathname + '/images/003_containers.png'

export default function Section() {
  console.log(restImage)
  const canvasStyles = {
    position: 'absolute',
    top: '0px',
    zIndex: '50',
    height: '100%'
  }

  return (
    <section className="rest-section">
      <div className="rest-section-inner-container">
        <img src={restImage}  style={{width: "100%"}}/>
        {/* <video autoPlay muted loop className="rest-video" key={restVideo2}>
          <source src={restVideo2} type="video/mp4" />
        </video> */}
        {/* <SphereScene canvasStyles={canvasStyles} /> */}
      </div>
    </section>
  )
}
