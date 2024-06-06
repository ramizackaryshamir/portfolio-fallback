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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          gap: '10px',
          scrollSnapType: 'both mandatory',
          backgroundColor: '#ffffff',
        }}
      >
        <Project
          src={DFS}
          title="Discover Financial Services"
          description="Mobile Application Regression Pieline Portal"
          descriptionByline="ReactJS with TypeScript + React Native with TypeScript || NodeJS Express with Nginx || GitHub Actions || React Testing Library + Jest + Appium || JestAxe + Lighthouse CI CLI + Pa11y CLI"

          descriptionFeature1="Optimized performance across all Core Web Vitals, improving page load by 75%, page responsiveness by 43%, and visual stability by 61%."
          descriptionFeature2="Developed features for and maintained mobile regression pipeline portal using modern ReactJS design patterns to service 15 teams of React Native mobile application developers."
          descriptionFeature3="Designed performant and sturdy test suites using React Testing Library, Jest, and Appium to increase overall test coverage by 65%."
        />
        <Project
          src={JNJ}
          title="Johnson and Johnson"
          description="Johnson and Johnson Vision website"
          descriptionByline="Stack:"
          descriptionFeature1="Piloted B2B Customer Loyalty website using NextJS, TailwindCSS, React, and Redux to manage Johnson and Johnson Vision’s alliance of global GPOs."
          descriptionFeature2="Consulted in all aspects of SDLC and lead team of 4 developers in redesign of Johnson and Johnson Vision’s customer-facing site."
        />
        <Project
          src={CC92MB}
          title="Coca Cola"
          description="Coca Cola ReactJS and React Native component libraries"
          descriptionByline="Stack:"
          descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
          descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
          descriptionFeature3="Implementation of CSS Grid and CSS Flexbox."
        />
        <Project
          src={NA}
          title="New Alternatives"
          description=""
          descriptionByline="Stack: ReactJS "
          descriptionFeature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
          descriptionFeature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
          descriptionFeature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
        />
        <Project
          src={SAMSHA}
          title="NYT News Widget"
          description="Vanilla JavaScript News Widget"
          descriptionByline="Stack:"
          descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
          descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
          descriptionFeature3="Implementation of CSS Grid and CSS Flexbox."
        />
        <Project
          src={TABOOLA}
          title="Taboola"
          description="MERN Stack Front to Back"
          descriptionByline="Stack:"
          descriptionFeature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
          descriptionFeature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
          descriptionFeature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
        />
      </div>
      </Layout>
    </>
  );
}
