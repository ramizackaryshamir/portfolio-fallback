import { motion } from "framer-motion";
import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: 1,
          padding: "10px 0 10px 10px",
          border: "1px solid black",
          backgroundColor: "white",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0,
            duration: 3,
          }}
        >
          <Header />
        </motion.div>
      </header>
      <>{children}</>
    </>
  );
}
