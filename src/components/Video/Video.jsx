const Video = ({ src }) => {
  return (
    <>
      <video
        style={ {
          objectFit: 'cover',
          width: '100vw',
        }}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
      </video>

    </>
  );
};

export default Video;
