import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <div style={pageStyles}>
      <Layout pageTitle="Page not found">
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
