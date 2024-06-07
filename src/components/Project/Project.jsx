import React, {
  Suspense,
  lazy
} from "react";
import { motion } from "framer-motion";
// import Video from "../Video/Video.jsx";
import './style.css'

const Video = lazy( () => import( "../Video/Video.jsx" ) )

const Project = ({
  src,
  title,
  description,
  techStack,
  feature1,
  feature2,
 feature3, s
}) => {
  return (
    <>
      <section
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          width: '90vw',
          scrollSnapAlign: 'start',
          backgroundColor: 'orange',
          border: '5px solid black'
          // backgroundColor: '#000000'
        }}
      >
        <div
         style={ {
          listStyleType: 'none',
          paddingTop: '10px'
        }}
        >
          <h1
          className='copperplate'
          style={ {
            listStyleType: 'none',
            backgroundColor: 'green',

        }}
          >
            { title }
          </h1>
          <section
            style={ {
              // paddingLeft: '15px',
              backgroundColor: 'pink',

        }}
          >
            <p
              className='futura'
               style={ {

              backgroundColor: 'gold'
        }}
            >
              { description }
            </p>
            <p
              className='futura'
              style={ {

              backgroundColor: 'blue'
        }}
            >
              { techStack }
            </p>
          </section>
          <section
            className='gill-sans'
          >
            Project highlights include {feature1} {feature2} {feature3 ? feature3 : null}
          </section>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 3,
          }}
        >
          <Suspense fallback={null}>
            <Video
              src={ src }
            />
          </Suspense>
        </motion.div>
      </section>
    </>
  );
};

export default Project;
