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
        style={{
          height: '100vh',
          scrollSnapAlign: 'start',
          backgroundColor: '#000000'
        }}
      >
        <div >
          <h1 >{title}
          </h1>
          <ul>
            <li >{description}
            </li>
            <li >{descriptionByline}
            </li>
          </ul>
          <h2 >Project highlights:
          </h2>
          <ul>
            {descriptionFeature1 ? <li>{descriptionFeature1}</li> : null}
            {descriptionFeature2 ? <li>{descriptionFeature2}</li> : null}
            {descriptionFeature3 ? <li>{descriptionFeature3}</li> : null}
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
          <Video src={src} />
        </motion.div>
      </section>
    </>
  );
};

export default Project;
