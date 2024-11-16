import { useRef } from 'react'
import './VideoPlayer.css'


const VideoPlayer = ({st, setSt, secondUrl}) => {

    const player = useRef(null)

    const hideVideo = (e) => {
        if(e.target === player.current){
            setSt(false)
        }
    }

  return (
    <div ref={player} className={`video-player ${st ? "" : "hide"}`} onClick={hideVideo}>
      <video src={secondUrl} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer