import React from "react";
import Nav from "../Nav/Nav.jsx";

export default function Header() {

  return (
    <>
      <header
          style={ {
            display: 'flex',
          flexDirection: 'row',
          justifyContent: "space-between",
            alignItems: 'center',
          height: '30px',

          }}
      >
        <article
          style={ {
            color: 'black'
          }}
        >
          Rami Zackary Shamir
        </article>
        <Nav />
      </header>
    </>
  );
}
