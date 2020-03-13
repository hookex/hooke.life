import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ResumeQuery($id: Int!) {
    strapiResume(strapiId: { eq: $id }) {
      strapiId
    }
  }
`

const Resume = ({ data }) => {
  const resume = data.strapiResume
  return (
      <div>

      </div>
  )
}

export default Resume
