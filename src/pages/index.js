import * as React from "react"
import Layout from '../components/layout/layout'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import image from '../images/background-forest.webp'
import cardList from '../assets/cardList.json'

const pageStyles = {
  color: "black",
  padding: "0 40px",
  margin: "auto",
  height: "100%",
  maxWidth: "2000px",
}
const sectionStyles = {
  margin: "20px 0",
}
const sectionTitle = {
  padding: "10px",
}
const servicesStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
}
const articlesStyles = {
  width: "30%",
}

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="Home Page">
          <Banner image={image} text={`Création de site vitrine écologique et assistance en référencement naturel "SEO"`} />
          <div style={pageStyles}>
            <section style={sectionStyles}>
              <h2 style={sectionTitle}>Eco-conception web</h2>
              <p>Le but de l'éco-conception web est de réduire l'impact écologique et environnemental d'internet et du numérique dans sa globalité.<br /><br />
              Pour se faire il est nécessaire de réduire le poids de son site pour qu'il soit moins énergivore. Rassurez-vous, cela ne veut pas dire faire un site comme au début d'internet! Il s'agit simplement d'optimiser et de simplifier votre site web.<br /><br />
              Et bonne nouvelle tout cela va permettre d'améliorer l'expérience client, le référencement naturel mais aussi de répondre au mieux aux attentes environnementales et sociétales.<br /><br />
              Je vous accompagnerai pour rendre votre entreprise plus attractive et visible sur Internet.<br /><br />Mettre en place un site vitrine administrable avec Contentful, Gatsby.js et Netlify</p>
            </section>
            <section style={sectionStyles}>
              <h2 style={sectionTitle}>Mes Services</h2>
              <div style={servicesStyles}>
              {cardList.map((card) => {
                return (
                  <article key={`${card.id}`} style={articlesStyles}>
                    <Card service={card.service} image={card.image} first={card.first} second={card.second} third={card.third} />
                  </article>
                )
              })}
              </div>
            </section>
          </div>
        </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
