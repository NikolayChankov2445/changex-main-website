import * as React from "react"
import Layout from "../components/Layout/Layout";
import ApyContextProvider from "../components/Context/ApyContext";
import PricesContextProvider from "../components/Context/PriceContext";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
      <ApyContextProvider>
          <PricesContextProvider>
              <Navigation />
              <Layout>

              </Layout>
              <Footer />
          </PricesContextProvider>
      </ApyContextProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
