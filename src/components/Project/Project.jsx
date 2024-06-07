import React, {
  Suspense,
  lazy
} from "react";
import { motion } from "framer-motion";
// import Video from "../Video/Video.jsx";
const Video = lazy(()=> import("../Video/Video.jsx"))

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
          justifyContent: "space-around",
          height: '100vh',
          scrollSnapAlign: 'start',
          backgroundColor: '#000000'
        }}
      >
        <div
         style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
            listStyleType: 'none',
          paddingTop: '10px'
        }}
        >
          <h1
          className='rmo'
          style={ {
          display: 'flex',
          flexDirection: 'column',
          listStyleType: 'none',
        }}
          >
            { title }
          </h1>
          <ul
            style={ {
            paddingLeft: '15px',
              listStyleType: 'none',
              lineHeight: '1.6',
        }}
          >
            <li
              className='open-sans'
                  style={ {
                lineHeight: '1.6',
        }}
            >
              { description }
            </li>
            <li
            >
              { techStack }
            </li>
          </ul>
          <h2>
            Project highlights:
          </h2>
          <ul
           style={ {
            paddingLeft: '30px',
            color: '#ffffff'
        }}
          >
            { feature1 ? <li
              style={ {
                lineHeight: '1.6',
              } }
            >{ feature1 }</li> : null }
            {feature2 ? <li
              style={ {
                lineHeight: '1.6',
              } }>
              { feature2 }</li> : null }
            {feature3 ? <li
             style={ {
                lineHeight: '1.6',
              } }
            >{feature3 }</li> : null }
          </ul>
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
