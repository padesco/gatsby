// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const pageStyles = {
  color: "white",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const AboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About me">
        <div style={pageStyles}>
          <p>Développeur web freelance, création de site vitrine écologique et assistance en référencement naturel "SEO".</p>  
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
            src="../images/about.jpg"
          />
        </div>
      </Layout>
    </div>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage