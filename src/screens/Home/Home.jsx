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
          alignItems: 'center',
          width: '100vw',
          gap: '10px',
          scrollSnapType: 'both mandatory',
          backgroundColor: '#036A87',
          // border: '10px solid red'
        }}
      >
        <Project
          src={DFS}
          title="Discover Financial Services"
          description="Mobile Application Regression Pipeline Portal"
          techStack="ReactJS with TypeScript + React Native with TypeScript || NodeJS Express with Nginx || GitHub Actions || React Testing Library + Jest + Appium || JestAxe + Lighthouse CI CLI + Pa11y CLI"
          feature1=" performance optimization across all Core Web Vitals, "
          bold1="improving page load by 75%, page responsiveness by 43%, and visual stability by 61%. "
          feature2="Feature development for internal applications with ReactJS and for customer-facing applications with React Native. "
            feature3="Test suite design with React Testing Library, Jest, and Appium, "
          bold3="expanding test coverage by 65%."
        />
        <Project
          src={JNJ}
          title="Johnson and Johnson"
          description="Johnson and Johnson Vision website"
          techStack="NextJS + Tailwind CSS || ReactJS with TypeScript || GitHub Actions || Vitest + Puppeteer"
          feature1=" engineering B2B Customer Loyalty website to manage Johnson and Johnson Vision’s alliance of global GPOs. "
          feature2="Providing strategic consultation in all aspects of SDLC for redesign of Johnson and Johnson Vision’s customer-facing site."
        />
        <Project
          src={CC92MB}
          title="Coca Cola"
          description="ReactJS and React Native component libraries"
          techStack="SreactJS with TypeScript ||} React Native with TypeScript || Storybook || tsup + Changesets || React Dev Tools + Xcode Instruments + Android Studio Profiler"
          feature1=" developing UI library of 100+ custom React Web and 50+ custom React Native high quality, resilient components. "
          feature2="Working closely with backend developers to integrate UI components with server-side logic."
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
