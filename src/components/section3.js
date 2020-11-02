import React from "react"
import AndesMechanics1 from "../images/mechanics_1.inline.svg"
import AndesMechanics2 from "../images/mechanics_2.inline.svg"
import AndesMechanics3 from "../images/mechanics_3.inline.svg"

export default function () {
  return (
    <div className="section section3" id="section3">
      <div className="mechanics">
        <div className="row">
          <div className="col-12">
            <h3 className="mechanics-title">¿CÓMO PARTICIPÁS?</h3>
          </div>
          <div className="col-lg-4">
            <div className="mechanics-item">
              <figure className="mechanics-item-figure">
                <AndesMechanics1 />
              </figure>
              <h4 className="mechanics-item-txt">
                <strong>ENCONTRÁ UNA DE LAS CABINAS</strong> <br />
                CONECTADAS A LOS ECÓFONOS <br />
                EN LOS ANDES.
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mechanics-item">
              <figure className="mechanics-item-figure">
                <AndesMechanics2 />
              </figure>
              <h4 className="mechanics-item-txt">
                <strong>GRITÁ</strong> <br />
                AAAAAANNNDDDDEEEEEES!!!
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mechanics-item">
              <figure className="mechanics-item-figure">
                <AndesMechanics3 />
              </figure>
              <h4 className="mechanics-item-txt">
                MÁS VECES SUENA <br />
                TU ECO EN LA MONTAÑA, <br />
                <strong> MÁS CERVEZA TE GANÁS.</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
