import React from "react";
import '../../style.css';

const Video = ({ src }) => {
  return (
    <>

      <video autoPlay={true} muted={true} loop={true} playsInline={true} className="video">
        <source src={src} type="video/mp4" />
      </video>

    </>
  );
};

export default Video;
