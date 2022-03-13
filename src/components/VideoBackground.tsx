import ReactPlayer from "react-player";

interface VideoProps {
  video: boolean;
  windowDimensions: {
    height: number,
    width: number
  };
  play: boolean;
  mute: boolean;
  volume: number;
}

function VideoBackground(props: VideoProps) {
  return (
    <ReactPlayer
      style={{
        position: 'fixed',
        display: 'flex',
        flex: 1,
        zIndex: 0,
        height: '100vh',
        width: '100vw',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      width={props.windowDimensions.width * 1.5}
      height={props.video ? props.windowDimensions.height * 1.5 : 0}
      url="https://www.youtube.com/embed/5qap5aO4i9A?rel=0"
      controls={false}
      playing={props.play}
      volume={props.mute ? 0 : props.volume / 100}
      pip={true}
      config={{ youtube: { playerVars: { rel: 0 } } }}
    />
  );
}

export default VideoBackground;