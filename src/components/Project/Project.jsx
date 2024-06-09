import React, {
  Suspense,
  lazy
} from "react";
import { motion } from "framer-motion";
import './style.css'

const Video = lazy( () => import( "../Video/Video.jsx" ) )

const Project = ({
  src,
  title,
  description,
  techStack,
  feature1,
  feature2,
  feature3,
  bold1,
  bold2,
  bold3
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
          width: '95vw',
          scrollSnapAlign: 'start',
          // backgroundColor: 'orange',
          // border: '5px solid black'
          backgroundColor: '#036A87'
        }}
      >
        <section
         style={ {


            // backgroundColor: 'purple'

        }}
        >
          <h1
          className='copperplate'
          style={ {
            paddingBottom: '15px',
            // border: '4px green solid'


        }}
          >
            { title }
          </h1>
            <p
              className='futura'
               style={ {
                   paddingBottom: '15px',
                // border: '4px gold solid'
        }}
            >
              { description }
            </p>
            <p
              className='futura'
              style={ {
              paddingBottom: '15px',
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
              color: '#3b3b42'
        }}
            >

            Project highlights include
            { feature1 ? feature1 : null }
             <span style={ {
              fontWeight: 'bold',
              color: '#ffffff'
            }}>{ bold1 ? bold1 : null }</span>
            { feature2 ? feature2 : null }
              <span style={ {
              fontWeight: 'bold',
              color: '#ffffff'
            }}>{ bold2 ? bold2 : null }</span>
            { feature3 ? feature3 : null }
            <span style={ {
               fontWeight: 'bold',
              color: '#ffffff'
            }}>{ bold3 ? bold3 : null }</span>

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
