import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    headerBand,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'
import Logo from '../images/logo.png'

const Layout = ({ pageTitle, children }) => {
  const effectiveYear = new Date().getFullYear();
  return (
    <div className={container}>
      <header>
        <div className={headerBand}>
          <img src={Logo} alt="Logo" />
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>© {effectiveYear} MON-SITE-WEB. All rights reserved</p>
      </footer>
    </div>
  )
}

export default Layout