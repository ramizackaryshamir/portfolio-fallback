import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import '../../../style.css';

export default function Nav() {

  return (
    <ul className='navContainer'>


      {/* <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        > */}
      <li>
        <Link to="/" className='navLink'>
          Projects
        </Link>
      </li>
      {/* </motion.li> */}
      {/* <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        > */}
      <li>
        <Link to="/contact" className='navLink'>
          Contact
        </Link>
      </li>
      {/* </motion.li> */}

    </ul>
  );
}
