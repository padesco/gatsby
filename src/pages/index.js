import * as React from "react"
import Layout from '../components/layout'

const pageStyles = {
  color: "white",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="Home Page">
          <div style={pageStyles}>
            <p>Développeur web freelance, création de site vitrine écologique et assistance en référencement naturel "SEO".</p>
            <section>
              <h2>Site vitrine écologique</h2>
              <p>Mettre en place un site vitrine administrable avec Contentful, Gatsby.js et Netlify</p>
            </section>
            <section>
              <h2>Mes Services</h2>
              <div>
                <article></article>
                <article></article>
                <article></article>
              </div>
            </section>
          </div>
        </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
