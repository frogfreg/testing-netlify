import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <h1>This app rules</h1>
      <p>Log in to find out why</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
  )
}
