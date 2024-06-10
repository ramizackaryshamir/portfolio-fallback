const Video = ({ src }) => {
  return (
    <>
      <video
        style={ {
          objectFit: 'cover',
          width: '100vw',
          maxWidth: '900px'
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
