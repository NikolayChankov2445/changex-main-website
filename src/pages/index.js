import * as React from "react"
import {lazy} from "react";

import Home from "../components/Home/Home";
import Seo from "../components/SEO/Seo";

const Layout = lazy(() => import('../components/Layout/Layout'));

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
