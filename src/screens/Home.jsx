import React from "react";
import Layout from "../components/shared/Layout.jsx";
import Project from "../components/Project.jsx";
import DFS from "../assets/videos/dfs-mrp.mp4";
import JNJ from "../assets/videos/jnjvision.mp4";
import CC92MB from "../assets/videos/coca-cola_92mb.mp4";
import MB from "../assets/videos/merrick-mobile-demo_portfolio.mp4";
import NA from "../assets/videos/new-alternatives.mp4";
import TABOOLA from "../assets/videos/taboola.mp4";

export default function Home() {
  const projects = [
    {
      src: DFS,
      title: "Discover Financial Services",
      urlProjectId: "discover-financial-services",
      description: "Mobile Application Regression Pipeline Portal",
      techStack:
        "ReactJS with TypeScript + React Native with TypeScript || NodeJS Express with Nginx || GitHub Actions || React Testing Library + Jest + Appium || JestAxe + Lighthouse CI CLI + Pa11y CLI",
      feature1: " performance optimization across all Core Web Vitals, ",
      bold1:
        "improving page load by 75%, page responsiveness by 43%, and visual stability by 61%. ",
      feature2:
        "Feature development for internal applications with ReactJS and for customer-facing applications with React Native. ",
      feature3:
        "Test suite design with React Testing Library, Jest, and Appium, ",
      bold3: "expanding test coverage by 65%.",
      backgroundColor: "#D79A36",
      fontColor: "#25244C",
    },
    {
      src: JNJ,
      title: "Johnson and Johnson",
      urlProjectId: "johnson-and-johnson",
      description: "Johnson and Johnson Vision website",
      techStack:
        "NextJS + Tailwind CSS || ReactJS with TypeScript || GitHub Actions || Vitest + Puppeteer",
      feature1:
        " engineering B2B Customer Loyalty website to manage Johnson and Johnson Vision’s alliance of global GPOs. ",
      bold2: " Providing strategic consultation in all aspects of SDLC ",
      feature3:
        "for redesign of Johnson and Johnson Vision’s customer-facing site.",
      backgroundColor: "rgb(105, 18, 29)",
      fontColor: "#E8E9EF",
    },
    {
      src: CC92MB,
      title: "Coca Cola",
      urlProjectId: "coca-cola",
      description: "ReactJS and React Native component libraries",
      techStack:
        "ReactJS with TypeScript ||} React Native with TypeScript || Storybook || Webpack + Babel || React Dev Tools + Xcode Instruments + Android Studio Profiler",
      bold1:
        " developing UI library of 100+ custom React Web and 50+ custom React Native high quality, resilient components; ",
      feature2:
        " working closely with backend developers to integrate UI components with server-side logic.",
      backgroundColor: "#7D0C46",
      fontColor: "#EBDBA8",
    },
    {
      src: MB,
      title: "Merrick Bank",
      urlProjectId: "merrick-bank",
      description: "Merrick Bank mobile application",
      techStack:
        "React Native with TypeScript || Redux with Redux Saga || GitHub Actions || React Testing Library + Jest + Appium",
      bold1: " development of mobile application features for iOS and Android,",
      feature2:
        " and strategic implementation of bash script to automate the transition from a React based web app to a React Native mobile application,",
      bold2: " saving 300+ hours of development time and cost",
      backgroundColor: "rgb(54, 188, 157)",
      fontColor: "#447994",
    },
    {
      src: NA,
      title: "New Alternatives",
      urlProjectId: "new-alternatives",
      description: "Redesign of customer-facing website",
      techStack:
        "Stack: ReactJS with TypeScript || GitHub Actions || React Testing Library + Jest || JestAxe + LightHouse CI CLI + Pa11y CLI",
      feature1:
        " redesigning customer-facing website for LGBTQ+ Homeless Youth center in NYC using React and TypeScript.",
      bold2: " Establishing CI/CD pipeline for software development process ",
      feature3: "using GitHub Actions.",
      backgroundColor: "#41659D",
      fontColor: "#E5C922",
    },
    {
      src: TABOOLA,
      title: "Taboola",
      urlProjectId: "taboola",
      description: "Advertisemnet widgets for online news articles",
      techStack: "ReactJS with TypeScript || Selenium + Playwright",
      feature1:
        " working on Taboola’s recommendations ad formats and user experience; ",
      bold1: "collaborating with business teams throughout the company ",
      feature2:
        " and directly with external customers’ product and technical teams ",
      bold2: "to support clients in reaching conversion obejctives; ",
      feature3:
        "developing 'Recommended For You' and 'Around The World' below-the-fold advert widgets for online news articles.",
      backgroundColor: "rgb(45, 104, 132)",
      fontColor: "#27140A",
    },
  ];

  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            gap: "10px",
            scrollSnapType: "both proximity",
            backgroundColor: "#ffffff",
          }}
        >
          {projects.map((project) => {
            return (
              <>
                <Project
                  src={project.src}
                  urlProjectId={project.urlProjectId}
                  title={project.title}
                  description={project.description}
                  feature1={project.feature1}
                  bold1={project.bold1}
                  feature2={project.feature2}
                  bold2={project.bold2}
                  feature3={project.feature3}
                  bold3={project.bold3}
                  backgroundColor={project.backgroundColor}
                  fontColor={project.fontColor}
                />
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
