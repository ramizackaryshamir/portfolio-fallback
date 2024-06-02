import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
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
      <section className="project-container">
        <div className="project-info">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <p className="project-description-byline">{descriptionByline}</p>
          <span className="features-heading">Project highlights:</span>
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
          className="project-video"
        >
          <Video src={src} />
        </motion.div>
      </section>
    </>
  );
};

export default Project;
