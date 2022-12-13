import * as React from 'react'
import { Link } from 'gatsby'
import {
  headerBand,
  navLink,
  copyright,
  navLinkFooter
 } from './layout.module.css'
import Logo from '../../images/newlogo.png'

const Layout = ({ children }) => {
  const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {color: isCurrent ? "lightgreen" : "white",
          pointerEvents: isCurrent ? "none" : "pointer"}
        };
      }}
    />
  );
  const effectiveYear = new Date().getFullYear();
  return (
    <div>
      <header>
        <div className={headerBand}>
          <img src={Logo} alt="Logo" />
          <nav>
            <NavLink to="/" className={navLink}>Home</NavLink>
            <NavLink to="/about" className={navLink}>About</NavLink>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <img src={Logo} alt="Logo" />
        <ul>
          <li><NavLink to="/404" className={navLinkFooter}>Mentions légales</NavLink></li>
          <li><NavLink to="/404" className={navLinkFooter}>CGU</NavLink></li>
          <li><NavLink to="/404" className={navLinkFooter}>CGV</NavLink></li>
          <li><NavLink to="/404" className={navLinkFooter}>Contact</NavLink></li>
        </ul>
        <p className={copyright}>MON-SITE-WEB © {effectiveYear} - All rights reserved</p>
      </footer>
    </div>
  )
}

export default Layout