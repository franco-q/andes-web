import '../styles/main.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import React, { useEffect, useState } from 'react'
import Disclamer from '../components/Disclamer'
import Pagination from '../components/Pagination'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CookiesProvider, useCookies } from 'react-cookie'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
var isScrolling = false

export default function Home() {
	const [cookies, setCookie] = useCookies(['in_legal_age'])
	var menuRef = React.useRef(null)
	var [showDisclamer, setShowDisclamer] = useState(1)
	var [activeSection, setActiveSection] = useState(1)

	var menuAnimation

	function clickFn() {
		if (!menuAnimation) {
			menuAnimation = gsap.fromTo(
				menuRef,
				{ opacity: 0, x: document.body.offsetWidth },
				{
					opacity: 1,
					duration: 0.3,
					reversed: true,
					stagger: 0.5,
					ease: 'circ',
					x: 0
				}
			)
		}
		menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse()
	}

	function scrollMeTo(id) {
		isScrolling = true
		if (isScrolling) {
			gsap.to(window, {
				scrollTo: { y: document.getElementById(id).offsetTop, autoKill: false },
				duration: 0.7,
				ease: 'power3.easeInOut',
				onComplete: () => {
					isScrolling = false
				}
			})
		}
	}

	function AcceptDisclamer($el, bornDate) {
		gsap.to($el, {
			opacity: 0,
			onComplete: () => {
				setShowDisclamer(false)
				setCookie('in_legal_age', bornDate, { path: '/' })
			}
		})
	}

	useEffect(() => {
		setShowDisclamer(!cookies.in_legal_age)

		gsap.fromTo(
			'.mechanics-item-figure svg #pulse',
			1.7,
			{ transformOrigin: 'center center', autoAlpha: 1, scale: 1 },
			{
				repeat: -1,
				transformOrigin: 'center center',
				autoAlpha: 0,
				scale: 1.3,
				ease: 'back.out(1.7)'
			}
		)

		gsap.from('.mechanics-item', {
			scrollTrigger: {
				trigger: '.section3',
				start: '10% center',
				end: '20% center'
			},
			opacity: 0,
			stagger: 0.1,
			scale: 0.2,
			duration: 1
		})

		gsap.timeline({
			scrollTrigger: {
				trigger: '.section4',
				start: 'top center',
				end: 'top center'
			}
		})
			.from('.footer', {
				ease: 'circ',
				scale: 20,
				duration: 0.3
			})
			.from('.ubication', {
				x: '+=100vw',
				duration: 0.3
			})
			.from('.footer > *', {
				opacity: 0,
				duration: 0.2
			})
			.from('.ubication_gsap_1', {
				scale: 0.5,
				x: -500,
				stagger: 0.1
			})

		gsap.from('.section2 > *', {
			scrollTrigger: {
				trigger: '.section2',
				start: '-20% 80%',
				end: '50% 50%'
			},
			opacity: 0,
			duration: 0.5
		})

		gsap.utils.toArray('.section').forEach((trigger, i) => {
			ScrollTrigger.create({
				trigger,
				start: '5% 95%',
				end: '95% 5%',
				onEnterBack: () => {
					if (!isScrolling) {
						setActiveSection(i + 1)
						gsap.to(window, {
							scrollTo: { y: trigger.offsetTop, autoKill: false },
							duration: 0.7,
							ease: 'power3.easeInOut'
						})
					}
				},
				onEnter: () => {
					if (!isScrolling) {
						setActiveSection(i + 1)
						gsap.to(window, {
							scrollTo: { y: trigger.offsetTop, autoKill: false },
							duration: 0.7,
							ease: 'power3.easeInOut'
						})
					}
				}
			})
		})
	}, [])

	return (
		<CookiesProvider>
			<div>
				<Pagination active={activeSection} />
				{showDisclamer && <Disclamer onAccept={AcceptDisclamer} />}
				<Section1 menuRef={$el => (menuRef = $el)} toggleMenu={clickFn} onScrollto={scrollMeTo} btn />
				<Section2 />
				<Section3 />
				<Section4 />
			</div>
		</CookiesProvider>
	)
}
