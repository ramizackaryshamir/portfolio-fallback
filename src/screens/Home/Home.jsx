import React, {
  Suspense,
  lazy
} from "react";
import Layout from "../../components/shared/Layout/Layout.jsx";
import Project from "../../components/Project/Project.jsx";
import DFS from '../../assets/videos/dfs-mrp.mp4';
import JNJ from '../../assets/videos/jnjvision.mp4';
import CC92MB from '../../assets/videos/coca-cola_92mb.mp4';
import NA from '../../assets/videos/new-alternatives.mp4';
import SAMSHA from '../../assets/videos/samsha.mp4';
import TABOOLA from '../../assets/videos/taboola.mp4';

// const DFS = lazy ( () => import( '../../assets/videos/dfs-mrp.mp4' ))
// const JNJ = lazy (() => import('../../assets/videos/jnjvision.mp4'))
// const CC92MB = lazy( () => import( '../../assets/videos/coca-cola_92mb.mp4' ) )
// const NA = lazy( () => import( '../../assets/videos/new-alternatives.mp4' ) )
// const SAMSHA = lazy( () => import( '../../assets/videos/samsha.mp4' ) )
// const TABOOLA = lazy(() => import('../../assets/videos/taboola.mp4'))
export default function Home() {
  return (
    <>
      <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          gap: '10px',
          scrollSnapType: 'both mandatory',
            backgroundColor: 'yellow',
          border: '10px solid red'
        }}
      >
        <Project
          src={DFS}
          title="Discover Financial Services"
          description="Mobile Application Regression Pipeline Portal"
          techStack="ReactJS with TypeScript + React Native with TypeScript || NodeJS Express with Nginx || GitHub Actions || React Testing Library + Jest + Appium || JestAxe + Lighthouse CI CLI + Pa11y CLI"

          feature1="Optimized performance across all Core Web Vitals, improving page load by 75%, page responsiveness by 43%, and visual stability by 61%."
          feature2="Developed features for and maintained mobile regression pipeline portal using modern ReactJS design patterns to service 15 teams of React Native mobile application developers."
         feature3="Designed performant and sturdy test suites using React Testing Library, Jest, and Appium to increase overall test coverage by 65%."
        />
        <Project
          src={JNJ}
          title="Johnson and Johnson"
          description="Johnson and Johnson Vision website"
          techStack="Stack:"
          feature1="Piloted B2B Customer Loyalty website using NextJS, TailwindCSS, React, and Redux to manage Johnson and Johnson Vision’s alliance of global GPOs."
          feature2="Consulted in all aspects of SDLC and lead team of 4 developers in redesign of Johnson and Johnson Vision’s customer-facing site."
        />
        <Project
          src={CC92MB}
          title="Coca Cola"
          description="Coca Cola ReactJS and React Native component libraries"
          techStack="Stack:"
          feature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
          feature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
         feature3="Implementation of CSS Grid and CSS Flexbox."
        />
        <Project
          src={NA}
          title="New Alternatives"
          description=""
          techStack="Stack: ReactJS "
          feature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
          feature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
         feature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
        />
        <Project
          src={SAMSHA}
          title="NYT News Widget"
          description="Vanilla JavaScript News Widget"
          techStack="Stack:"
          feature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
          feature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
         feature3="Implementation of CSS Grid and CSS Flexbox."
        />
        <Project
          src={TABOOLA}
          title="Taboola"
          description="MERN Stack Front to Back"
          techStack="Stack:"
          feature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
          feature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
         feature3="Seamless integration of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
        />
      </div>
      </Layout>
    </>
  );
}
