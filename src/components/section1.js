import React, { useRef, useEffect, useState } from 'react'
import AndesBrandSVG from '../images/brand.inline.svg'
import AndesMenuSVG from '../images/menu.inline.svg'
import gsap from 'gsap'
import mp4 from '../videos/andes_header_v1.mp4'

export default function (props) {
	function onNavLink(e, id) {
		e.preventDefault()
		props.onScrollto(id)
	}

	const $el = useRef()
	const $Menu = useRef()

	const [show, setShow] = useState(0)

	const Tween = useRef()

	useEffect(() => {
		Tween.current = gsap.fromTo(
			$Menu.current.querySelectorAll('.nav-item'),
			{ opacity: 0, x: document.body.offsetWidth },
			{
				opacity: 1,
				duration: 0.3,
				reversed: !true,
				stagger: 0.1,
				ease: 'circ',
				x: 0
			}
		)
	}, [Tween])

	useEffect(() => {
		console.log([show && Tween.current.reversed()])
		show && Tween.current.reversed() ? Tween.current.play() : Tween.current.reverse()
	}, [show])

	const $navbar = useRef()
	const $footer = useRef()

	useEffect(() => {
		gsap.from('.videobg', {
			opacity: 0,
			scale: 1.5,
			duration: 3
		})
		gsap.from($navbar.current, {
			y: -1000,
			delay: 0.3,
			duration: 0.7
		})
		gsap.from($footer.current, {
			y: 1000,
			delay: 0.3,
			duration: 0.7
		})
	}, [])

	return (
		<div className="section section1" id="section1" ref={$el}>
			<nav className="navbar" ref={$navbar}>
				<a href="/" className="brand">
					<AndesBrandSVG />
				</a>
				<ul className="menu list-unstyled" ref={$Menu}>
					<li className="nav-item">
						<a className="nav-link" href="/" onClick={e => onNavLink(e, 'PRINCIPAL')}>
							PRINCIPAL
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="/"
							onClick={e => onNavLink(e, 'PARTICIPACION')}
						>
							PARTICIPACIÓN
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/" onClick={e => onNavLink(e, 'UBICACIONES')}>
							UBICACIONES
						</a>
					</li>
				</ul>
				<button className="menu-toggle" onClick={() => setShow(show => !show)}>
					<AndesMenuSVG />
				</button>
			</nav>
			<div className="videobg">
				<video autoPlay muted loop src={mp4}>
					Your device does not support playing 'video/mp4' videos
				</video>
			</div>
			<div className="echoes">
				<img src={require('../images/andes_header_logo_v2.png')} alt="ANDES" />
			</div>
			<div className="section1-footer container-fluid" ref={$footer}>
				<div className="section1-footer-links">
					<a
						href="https://www.facebook.com/andescerveza/"
						className="section1-footer-link"
					>
						<i className="icon-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/andescerveza/"
						className="section1-footer-link"
					>
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
