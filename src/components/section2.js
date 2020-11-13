import React from 'react'
import Tilt from 'react-parallax-tilt'

import AndesMountainSVG from '../images/andes_mountain.svg'
import AndesFrameSVG from '../images/andes_frame.svg'
import AndesBottlePNG from '../images/bottle.png'
import AndesBirdSVG from '../images/bird.svg'
import AndespediSVG from '../images/pedile_una_andes_a_los_andes.inline.svg'
import AndesSquares from '../images/squares.inline.svg'

export default function () {
	return (
		<div className="section section2" id="PRINCIPAL">
			<div className="section2-child section2-child_1">
				<div className="tilt-wrap">
					<div className="tilt_andesmountain">
						<img src={AndesMountainSVG} alt="ANDES" />
					</div>
					<div className="tilt">
						<div className="tilt_andesframe">
							<img src={AndesFrameSVG} alt="ANDES" />
						</div>
						<div className="tilt_andesbottle">
							<img src={AndesBottlePNG} alt="ANDES" />
						</div>
					</div>
				</div>
			</div>
			<div className="section2-child section2-child_2 campaing">
				<div>
					<div className="campaing-bird campaing_gsap">
						<img src={AndesBirdSVG} alt="ANDES" />
					</div>
					<div className="campaing-title campaing_gsap">
						<AndespediSVG />
					</div>
					<h3 className="campaing-txt campaing_gsap">
						MÁS VECES <br />
						SUENA TU ECO, <br />
                        MÁS CERVEZA <br />
						TE GANÁS
					</h3>
					<div className="campaing-squares campaing_gsap">
						<AndesSquares />
					</div>
				</div>
			</div>
		</div>
	)
}
