import React from "react";
import Layout from "../../components/shared/Layout/Layout.jsx";
import Project from "../../components/Project/Project.jsx";
import DFS from '../../assets/videos/dfs-mrp.mp4';
import JNJ from '../../assets/videos/jnjvision.mp4';
import CC92MB from '../../assets/videos/coca-cola_92mb.mp4';
import NA from '../../assets/videos/new-alternatives.mp4';
import SAMSHA from '../../assets/videos/samsha.mp4';
import TABOOLA from '../../assets/videos/taboola.mp4';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="projects-container">
          <Project
            src={DFS}
            title="Discover Financial Services"
            description="Stack: ReactJS with TypeScript || NodeJS Express with Nginx || GitHub Actions || React Testing Library + Jest || JestAxe + Lighthouse CI CLI + Pa11y CLI"
            descriptionByline="Mobile Application Regression Pieline Portal"
            descriptionFeature1=""
            descriptionFeature2=""
            descriptionFeature3=""
          />
          <Project
            src={JNJ}
            title="RJohnson and Johnson"
            description="World Clock Widget"
            descriptionByline="Current time for over 200 countries"
            descriptionFeature1="Handle and manipulate API data to render custom clean, client-friendly UI."
            descriptionFeature2="Consistent, dynamic styling of React Components using the styled-components library."
            descriptionFeature3="Set local time for client and display the current time for more than 200 countries in a sleek, minimalist-inspired throwback to the digital alarm clock."
          />
          <Project
            src={CC92MB}
            title="Coca Cola"
            description="Vanilla JavaScript News Widget"
            descriptionByline="Up-to-the-minute stories from the New York Times"
            descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
            descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
            descriptionFeature3="Implementation of CSS Grid and CSS Flexbox."
          />
          <Project
            src={NA}
            title="New Alternatives"
            description="MERN Stack Front to Back"
            descriptionByline="Revamp of website for NYC non-profit"
            descriptionFeature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
            descriptionFeature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
            descriptionFeature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
          />
          <Project
            src={SAMSHA}
            title="NYT News Widget"
            description="Vanilla JavaScript News Widget"
            descriptionByline="Up-to-the-minute stories from the New York Times"
            descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
            descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
            descriptionFeature3="Implementation of CSS Grid and CSS Flexbox."
          />
          <Project
            src={TABOOLA}
            title="Taboola"
            description="MERN Stack Front to Back"
            descriptionByline="Revamp of website for NYC non-profit"
            descriptionFeature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
            descriptionFeature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
            descriptionFeature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
          />
        </div>
      </Layout>
    </>
  );
}
