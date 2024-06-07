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
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100vh',
          width: '90vw',
          scrollSnapAlign: 'start',
          backgroundColor: 'orange',
          border: '5px solid black'
          // backgroundColor: '#000000'
        }}
      >
        <section
         style={ {


            backgroundColor: 'purple'

        }}
        >
          <h1
          className='copperplate'
          style={ {
            paddingBottom: '15px',
            border: '4px green solid'


        }}
          >
            { title }
          </h1>
            <p
              className='futura'
               style={ {
 paddingBottom: '15px',
                border: '4px gold solid'
        }}
            >
              { description }
            </p>
            <p
              className='futura'
              style={ {
              paddingBottom: '15px',
                border: '4px blue solid',
                fontSize: '12px',
                fontVariant: 'small-caps',
              textAlign: 'justify',
              textJustify: 'inter-word'
        }}
            >
              { techStack }
            </p>

          <p
            className='gill-sans'
             style={ {
              textAlign: 'justify',
              textJustify: 'inter-word',
              border: '4px white solid'
        }}
            >

            Project highlights include {feature1} {feature2} {feature3 ? feature3 : null}
          </p>
        </section>
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
