import React from "react"
import useStyles from "./Footer.js"

export default function Footer() {
  const classes = useStyles()

  return (
    <>
      <footer className={classes.footer}>
        <h1>Footer</h1>
      </footer>
    </>
  )
}
