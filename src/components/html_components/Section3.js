import React, { useEffect, useRef } from 'react';

const imgPath = window.location.href + '/images/RedHex.png'

export default function Section() {
  return (
    <section className="section-3">
      <img src={imgPath} alt="red hex" style={{width: '100%'}}/>
    </section>
  )
}


