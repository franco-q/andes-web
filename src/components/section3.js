import React, { useRef, useEffect } from 'react'
import AndesMechanics1 from '../images/mechanics_1.inline.svg'
import AndesMechanics2 from '../images/mechanics_2.inline.svg'
import AndesMechanics3 from '../images/mechanics_3.inline.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function (props) {
	const $el = useRef()

	useEffect(() => {
		gsap.from('.mechanics-item', {
			scrollTrigger: {
				trigger: $el.current,
				start: '20% center',
				end: '50% center'
			},
			opacity: 0,
			stagger: 0.1,
			scale: 0.2
		})

		gsap.fromTo(
			'.mechanics-item-figure svg #pulse',
			1.3,
			{ transformOrigin: 'center center', autoAlpha: 1, scale: 1 },
			{
				repeat: -1,
				transformOrigin: 'center center',
				autoAlpha: 0,
				scale: 1.3,
				ease: 'back.out(1.7)'
			}
		)
	}, [])

	return (
		<div className="section section3" id="PARTICIPACION" ref={$el}>
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
								<strong>ENCONTRÁ UNA DE LA ESTACIONES</strong> <br />
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
								¡AAAAANNNDDDEEEEESSS!
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
