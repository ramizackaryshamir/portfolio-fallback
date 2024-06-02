import React from "react"
import useStyles from "./Header.js"

import Nav from "../Nav/Nav.jsx"

export default function Header() {
  const classes = useStyles()
  return (
    <>
      <header className={classes.headerContainer}>
        <Nav />
      </header>
    </>
  )
}
