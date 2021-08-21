
import useStore from '../../store'
import ReactPlayer from 'react-player'
import { useEffect } from 'react'

export default function Navigation() {
  const videoIndex = useStore(state => state.videoIndex)
  const videoPaths = useStore(state => state.videoPaths)

  console.log(videoPaths)

  return (
    <>
      <video autoPlay muted loop id="myVideo" key={videoPaths[videoIndex]}>
        <source src={videoPaths[videoIndex]} type="video/mp4" />
      </video>
    </>
  )
}