import * as React from "react"
import Layout from "../components/Layout/Layout";
import ApyContextProvider from "../components/Context/ApyContext";
import PricesContextProvider from "../components/Context/PriceContext";
import Home from "../components/Home/Home";

const IndexPage = () => {
  return (
      <ApyContextProvider>
          <PricesContextProvider>
          <Layout>
              <Home />
          </Layout>
          </PricesContextProvider>
      </ApyContextProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
