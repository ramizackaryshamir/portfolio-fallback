import useScreenOrientation from "../hooks/useScreenOrientation";

const Video = ({ src }) => {
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
                width: "100vw", // pp-lessThan1000_width
                maxWidth: "900px", // pp-lessThan1000_maxWidth
                maxHeight: "430px", //pp-lessThan1000_maxHeight
              }
            : //if orientation is not "portrait-pprimary" (i.e. "landscape") set as folllows
              {
                width: "100vw", // notPP-lessThan100_width
                maxWidth: "300px", // notPP-lessThan100_maxWidth
                maxHeight: "400px", // notPP-lessThan100_maxHeight
              }
          : //if screen width is 1000 pixels or more set as follows
            {
              width: "50vw", // greaterThan1000_width
              minWidth: "500px", // greaterThan1000_maxWidth
              minHeight: "600px", //greaterThan1000_maxHeight
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
