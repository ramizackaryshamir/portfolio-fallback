import React, {
  Suspense,
  lazy
} from "react";
import { motion } from "framer-motion";
import useScreenOrientation from "../../hooks/useScreenOrientation.js";

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
  const orientation = useScreenOrientation()
  return (
    <>
      <section
        style={ orientation === 'portrait-primary' ?{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100vh',
          maxHeight: '900px',
          width: '100vw',
          maxWidth: '900px',
          paddingRight: '15px',
          paddingLeft: '15px',
          scrollSnapAlign: 'start',
          backgroundColor: '#036A87',
        }: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          scrollSnapAlign: 'start',
          backgroundColor: '#036A87',
        }}
      >
        <section
          style={ {
            position: 'relative',
            top: '40px'
          }}
      >
          <h1
          style={ {
            paddingBottom: '5px',
            fontFamily: 'Copperplate',
            fontSize: '20px',
            color: '#ffffff'
        }}
          >
            { title }
          </h1>
            <p
               style={ {
                paddingBottom: '25px',
                fontFamily: 'Copperplate',
                fontSize: '15px',
                color: '#ffffff'
               }}
            >
              { description }
            </p>
            {/* <p
              style={ {
              paddingBottom: '10px',
              fontVariant: 'small-caps',
              textAlign: 'justify',
              textJustify: 'inter-word',
              fontFamily: 'Futura',
              fontSize: '13px',
              color: '#ffffff'
        }}
            >
              { techStack }
            </p> */}

          <p
            style={ orientation === 'portrait-primary' ? {
              fontFamily: 'GillSans',
              fontSize: '17px',
              lineHeight: 1.5,
              textAlign: 'justify',
              textJustify: 'inter-word',
              color: '#0B2329',
              } : {
              width: '390px',
              paddingRight: '20px',
              paddingBottom: '70px',
              fontFamily: 'GillSans',
              fontSize: '17px',
              lineHeight: 1.5,
              textAlign: 'justify',
              textJustify: 'inter-word',
              color: '#0B2329',
            }}
            >
            Project highlights include
            { feature1 ? feature1 : null }
             <span style={ {
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#ffffff'
            }}>{ bold1 ? bold1 : null }</span>
            { feature2 ? feature2 : null }
              <span style={ {
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#ffffff'
            }}>{ bold2 ? bold2 : null }</span>
            { feature3 ? feature3 : null }
            <span style={ {
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#ffffff'
            }}>{ bold3 ? bold3 : null }</span>

          </p>
        </section>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: .5,
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
