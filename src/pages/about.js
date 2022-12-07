// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/Banner/Banner'
import image from '../images/background-forest.webp'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const pageStyles = {
  padding: "20px 40px",
  margin: "auto",
}

const AboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About me">
      <Banner image={image} />
        <div style={pageStyles}> 
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