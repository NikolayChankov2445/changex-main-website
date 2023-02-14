import * as React from "react"
import {lazy} from "react";

import Home from "../components/Home/Home";
import Seo from "../components/SEO/Seo";

import 'rsuite/dist/rsuite.min.css';
import "react-multi-carousel/lib/styles.css";
import 'react-vertical-timeline-component/style.min.css';

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
              title={'Changex | Decentralized Personal Finance For All'}
              imageAlt="Changexio Personal Finance"/>
    </>
)
