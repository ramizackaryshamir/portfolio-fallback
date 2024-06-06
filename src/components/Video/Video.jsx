import React from "react";
import '../../style.css';

const Video = ({ src }) => {
  return (
    <>
      {/* <section
        className="video"
      > */}
      <video autoPlay={true} muted={true} loop={true} playsInline={true} className="video">
        <source src={src} type="video/mp4" />
      </video>
      {/* </section> */}
    </>
  );
};

export default Video;
