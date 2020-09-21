import React from "react"
import { Link } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "./layout.css"

function Layout(props) {
  return (
    <IdentityContextProvider url="">
      <header>
        <Link to="/">JAMstack App</Link>
      </header>
      <main>{props.children}</main>
    </IdentityContextProvider>
  )
}

export default Layout
