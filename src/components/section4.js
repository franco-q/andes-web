import React from "react"
import AndesMap from "../images/map.png"

export default function () {
  return (
    <div className="section section4" id="section4">
      <div className="ubication container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ubication-map">
              <img src={AndesMap} alt="Andes" />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="ubication_gsap_1 ubication-title">
              ACÁ ENCONTRÁS LA CABINA QUE TE QUEDA MÁS CERCA.
            </h3>
            <ul className="ubication_gsap_1 ubication-list">
              <li className="ubication-list-item">
                <strong>DIRECCIÓN 1 </strong>
                <span>HORARIOS</span>
              </li>
              <li className="ubication-list-item">
                <strong>DIRECCIÓN 1 </strong>
                <span>HORARIOS</span>
              </li>
              <li className="ubication-list-item">
                <strong>DIRECCIÓN 1 </strong>
                <span>HORARIOS</span>
              </li>
              <li className="ubication-list-item">
                <strong>DIRECCIÓN 1 </strong>
                <span>HORARIOS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <ul className="footer-links list-unstyled">
          <li className="d-inline-block m-2">
            <a href="/" className="footer-link">
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li className="d-inline-block m-2">
            <a href="/" className="footer-link">
              <i className="icon-instagram"></i>
            </a>
          </li>
        </ul>
        <p className="footer-txt">
          BEBER CON MODERACIÓN. <br className="d-md-none" />
          PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
        </p>
      </footer>
    </div>
  )
}
