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
import { useCookies } from 'react-cookie'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
var isScrolling = false

export default function Home() {
	const [cookies, setCookie] = useCookies(['in_legal_age'])
	var [showDisclamer, setShowDisclamer] = useState(!cookies.in_legal_age)
	var [activeSection, setActiveSection] = useState(null)
	const [active, setActive] = useState('section1')

	function AcceptDisclamer($el, bornDate) {
		gsap.to($el, {
			opacity: 0,
			onComplete: () => {
				setShowDisclamer(false)
				setCookie('in_legal_age', bornDate, { path: '/' })
			}
		})
	}

	function scrollMeTo(id) {
		setActiveSection(id)
	}

	useEffect(() => {
		isScrolling = !!activeSection
		if (activeSection) {
			goToSection(document.getElementById(activeSection), {
				onComplete: () => {
					setActiveSection(null)
				}
			})
			/*
			setTimeout(() => {
				gsap.to(window, {
					scrollTo: {
						y: document.getElementById(activeSection),
						duration: 1,
						autoKill: false
					},
					onStart: () => setActive(activeSection),
					onComplete: () => {
						setActiveSection(null)
					}
				})
            }, 50)
            */
		}
	}, [activeSection])

	function goToSection(section, opts = {}) {
		gsap.to(window, {
			scrollTo: { y: section, autoKill: false },
			duration: 0.8,
			onStart: () => setActive(section.id),
			...opts
		})
	}

	useEffect(() => {
        gsap.utils.toArray('.section').forEach((trigger, i) => {
			ScrollTrigger.create({
				trigger,
				onEnter: () => {
					!isScrolling && goToSection(trigger)
				}
			})

			ScrollTrigger.create({
				trigger,
				start: 'bottom bottom',
				onEnterBack: () => {
					!isScrolling && goToSection(trigger)
				}
			})
		})
		return function () {
			ScrollTrigger.getAll().forEach(ST => {
				ST.kill()
			})
		}
	}, [])

	return (
		<div>
			<Pagination active={active} />
			<Section1 scrollingTo={activeSection} onScrollto={scrollMeTo} btn />
			<Section2 scrollingTo={activeSection} />
			<Section3 scrollingTo={activeSection} />
			<Section4 scrollingTo={activeSection} />
			{showDisclamer && <Disclamer onAccept={AcceptDisclamer} />}
		</div>
	)
}
