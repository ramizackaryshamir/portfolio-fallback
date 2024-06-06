import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

export default function Nav() {

  return (
    <ul
      style={ {
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',

    }}
    >
      {/* <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        > */}
      <li>
        <Link
          to="/"
          style={ {
            textDecoration: 'none',
            color: 'black'
          }}
        >
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
        <Link
          to="/contact"
           style={ {
            textDecoration: 'none',
            color: 'black'
          }}
        >
          Contact
        </Link>
      </li>
      {/* </motion.li> */}

    </ul>
  );
}
