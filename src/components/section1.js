import React, { useRef, useEffect } from 'react'
import AndesBrandSVG from '../images/brand.inline.svg'
import AndesMenuSVG from '../images/menu.inline.svg'
import AndesEchoesSVG from '../images/echoes.inline.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function (props) {
	function onNavLink(e, id) {
		e.preventDefault()
		props.onScrollto(id)
	}

	const $el = useRef()

	useEffect(() => {
	}, [])
	return (
		<div className="section section1" id="section1" ref={$el}>
			<nav className="navbar">
				<a href="/" className="brand">
					<AndesBrandSVG />
				</a>
				<ul className="menu list-unstyled" ref={props.menuRef}>
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
				<button className="menu-toggle" onClick={props.toggleMenu}>
					<AndesMenuSVG />
				</button>
			</nav>
			<div className="echoes">
				<AndesEchoesSVG />
			</div>
			<div className="section1-footer container-fluid">
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
