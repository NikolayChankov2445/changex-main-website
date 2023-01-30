import * as React from "react"
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";



const IndexPage = () => {
  return (
      <Layout>
        <Navigation/>

          <Footer />
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
