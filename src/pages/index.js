import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.scss"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="container">
          <div id='banner'>
            <h2 className='title'>Hooke</h2>
          </div>
          <ArticlesComponent articles={data.allStrapiArticle.edges}/>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
