import React from "react";

const Video = ({ src }) => {
  return (
    <>
      <video
        style={ {
          objectFit: 'cover',
          width: '100vw'
          // width: 'object-fit'
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
