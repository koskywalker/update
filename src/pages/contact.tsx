import { graphql } from "gatsby"
import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.ContactQuery
}

type IProps = IContainerProps & {
  location: Location
}

const Contact: React.FC<IProps> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || "UPDATE"

  const pageTitle = `お問い合わせ - ${siteTitle}`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} />
      <h1>{pageTitle}</h1>
      <div>
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button>Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Contact

export const pageQuery = graphql`
  query Contact {
    site {
      siteMetadata {
        title
      }
    }
  }
`
