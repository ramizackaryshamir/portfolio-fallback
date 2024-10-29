import useScreenOrientation from "../hooks/useScreenOrientation";

const Video = ({
  src,
  pp_lessThan1000_width,
  pp_lessThan1000_maxWidth,
  pp_lessThan1000_maxHeight,
  notPP_lessThan100_width,
  notPP_lessThan100_maxWidth,
  notPP_lessThan100_maxHeight,
  greaterThan1000_width,
  greaterThan1000_minWidth,
  greaterThan1000_maxHeight,
}) => {
  const orientation = useScreenOrientation();
  return (
    <video
      style={
        //check if window screen width is less than 1000
        //if true, further check the orientation
        window.screen.width < 1000
          ? //if orientation is "portrait=primary"
            orientation === "portrait-primary"
            ? //set as follows
              {
                width: pp_lessThan1000_width,
                maxWidth: pp_lessThan1000_maxWidth,
                maxHeight: pp_lessThan1000_maxHeight,
              }
            : //if orientation is not "portrait-primary" (i.e. "landscape") set as folllows
              {
                width: notPP_lessThan100_width,
                maxWidth: notPP_lessThan100_maxWidth,
                maxHeight: notPP_lessThan100_maxHeight,
              }
          : //if screen width is 1000 pixels or more set as follows
            {
              width: greaterThan1000_width,
              minWidth: greaterThan1000_minWidth,
              minHeight: greaterThan1000_maxHeight,
            }
      }
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
