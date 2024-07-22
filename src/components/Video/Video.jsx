import useScreenOrientation from "../../hooks/useScreenOrientation";

const Video = ({ src }) => {
  const orientation = useScreenOrientation()
  return (
      <video
        style={ orientation === 'portrait-primary' ? {
          width: '100vw',
          maxWidth: '900px',
          maxHeight: '430px',
        }: {
          width: '100vw',
          maxWidth: '300px',
          maxHeight: '400px',
        }}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
      </video>
  );
};

export default Video;
