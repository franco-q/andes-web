import React, { useRef, useEffect } from 'react'
import AndesBirdSVG from '../images/bird.svg'
import AndespediSVG from '../images/pedile_una_andes_a_los_andes.inline.svg'
import AndesSquares from '../images/squares.inline.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function (props) {
	const $el = useRef()

	useEffect(() => {
		gsap.from('.section2-child_1 .mountain_gsap', {
			scrollTrigger: {
				trigger: $el.current,
				start: '10% 90%',
				end: '90% 10%'
			},
			opacity: 0,
			delay: 0.3
		})
		gsap.from('.section2-child_2 .campaing_gsap', {
			scrollTrigger: {
				trigger: $el.current,
				start: '10% 90%',
				end: '90% 10%'
			},
			opacity: 0,
			stagger: 0.2,
			y: 500,
			delay: 0.3
		})
	}, [])

	return (
		<div className="section section2" id="PRINCIPAL" ref={$el}>
			<div className="section2-child section2-child_1">
				<div className="mountain_gsap"></div>
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
