import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import RouteBase from "../components/route-base"
import RouteSecret from "../components/route-secret"
import RouteLogin from "../components/route-login"

function Dashboard(props) {
  useEffect(() => {
    if (props.location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [])

  return (
    <Layout>
      <Profile />

      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  )
}

export default Dashboard
