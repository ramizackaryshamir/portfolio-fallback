import React from "react";
import '../../../style.css';
import Nav from "../Nav/Nav.jsx";

export default function Header() {

  return (
    <>
      <header
        className='headerContainer'
      >
        <article>
          Rami Zackary Shamir
        </article>

        <Nav />
      </header>
    </>
  );
}
