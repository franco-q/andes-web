import React from "react"
import AndesBrandSVG from "../images/brand.inline.svg"
import AndesMenuSVG from "../images/menu.inline.svg"

export default function () {
  return (
    <div className="section section1" id="section1">
      <nav className="navbar">
        <a href="/" className="brand">
          <AndesBrandSVG />
        </a>
        <ul className="menu list-unstyled">
          <li className="nav-item">
            <a className="nav-link" href="/">
              PRINCIPAL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              PARTICIPACIÓN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              UBICACIONES
            </a>
          </li>
        </ul>
        <button className="menu-toggle">
          <AndesMenuSVG />
        </button>
      </nav>
      <div className="section1-footer container-lg">
        <div className="section1-footer-links">
          <a href="/" className="section1-footer-link">
            <i className="icon-facebook"></i>
          </a>
          <a href="/" className="section1-footer-link">
            <i className="icon-instagram"></i>
          </a>
        </div>
        <div className="section1-footer-txt">
          BEBER CON MODERACIÓN. <br />
          PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
        </div>
      </div>
    </div>
  )
}
