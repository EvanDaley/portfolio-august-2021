import React, { useEffect, useRef } from 'react';

const imgPath = document.location.origin + window.location.pathname + '/images/RedHex.png'

export default function Section() {
  return (
    <section className="section-3">
      <img src={imgPath} alt="red hex" style={{width: '100%'}}/>
    </section>
  )
}


