import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <ul
      style={ {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '150px',
        listStyleType: 'none',
    }}
    >
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
    </ul>
  );
}
