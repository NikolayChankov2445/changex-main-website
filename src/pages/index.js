import * as React from "react"
import Layout from "../components/Layout/Layout";
import ApyContextProvider from "../components/Context/ApyContext";
import PricesContextProvider from "../components/Context/PriceContext";
import Home from "../components/Home/Home";
import Seo from "../components/SEO/Seo";

const IndexPage = () => {
  return (
          <Layout>
              <Home />
          </Layout>
  )
}

export default IndexPage

export const Head = () => (
    <>
        <Seo  description={'Money matters → Made Simple'}
              title={'Decentralized Personal Finance For All'}
              imageAlt="Changexio Personal Finance"/>
    </>
)
