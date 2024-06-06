import React from "react";
import { motion } from "framer-motion";
import Video from "../Video/Video.jsx";

const Project = ({
  src,
  title,
  description,
  descriptionByline,
  descriptionFeature1,
  descriptionFeature2,
  descriptionFeature3, s
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
                  style={ {
             lineHeight: '1.6',
        }}
            >
              { description }
            </li>
            <li
            >
              { descriptionByline }
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
            { descriptionFeature1 ? <li
              style={ {
                lineHeight: '1.6',
              } }
            >{ descriptionFeature1 }</li> : null }
            {descriptionFeature2 ? <li
              style={ {
                lineHeight: '1.6',
              } }>
              { descriptionFeature2 }</li> : null }
            { descriptionFeature3 ? <li
             style={ {
                lineHeight: '1.6',
              } }
            >{ descriptionFeature3 }</li> : null }
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
          <Video

            src={ src }
          />
        </motion.div>
      </section>
    </>
  );
};

export default Project;
