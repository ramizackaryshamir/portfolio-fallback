import React from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header.jsx";

export default function Layout({ children }) {


  return (
    <main>
      <header
        style={ {
           display: 'flex',
           flexDirection: 'column',
           position: 'sticky',
           top: 0,
           width: '100vw',
           backgroundColor: 'white',
           overflowX: 'hidden',
           overflowY: 'auto',
      }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 6,
          }}
        >
          <Header />
        </motion.div>
      </header>
      <section>
        {children}
      </section>
    </main>
  );
}
