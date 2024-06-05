import React from "react";
import { motion } from "framer-motion";
import '../../../style.css';
import Header from "../Header/Header.jsx";

export default function Layout({ children }) {


  return (
    <main className='layout'>
      <header className='header'>
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
      <section
      // className='layoutChildren'
      >
        {children}
      </section>
    </main>
  );
}
