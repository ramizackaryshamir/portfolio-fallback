import React from "react";
import { motion } from "framer-motion";
import '../../style.css';
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
          <h1 className="project-title">{title}
          </h1>
          <ul>
            <li className="project-description">{description}
            </li>
            <li className="tech-stack">{descriptionByline}
            </li>
          </ul>
          <h2 className="project-highlights">Project highlights:
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
          className="project-video"
        >
          <Video src={src} />
        </motion.div>
      </section>
    </>
  );
};

export default Project;
