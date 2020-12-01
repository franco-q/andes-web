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
	var [showDisclamer, setShowDisclamer] = useState(!cookies.in_legal_age)
	var [activeSection, setActiveSection] = useState(null)
	const [active, setActive] = useState('section1')

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
			setTimeout(() => {
				gsap.to(window, {
					scrollTo: {
						y: document.getElementById(activeSection).offsetTop,
						duration: 0.7,
						ease: 'power3.easeInOut',
						autoKill: false
                    },
                    onStart: () =>  setActive(activeSection),
					onComplete: () => {
						setActiveSection(null)
					}
				})
			}, 50)
		}
	}, [activeSection])

	useEffect(() => {
		gsap.utils.toArray('.section').forEach((trigger, i) => {
			ScrollTrigger.create({
				trigger,
				start: '10% 90%',
				end: '90% 10%',
				onEnterBack: () => {
					if (!isScrolling) {
						gsap.to(window, {
							scrollTo: { y: trigger.offsetTop, autoKill: false },
							duration: 0.7,
                            ease: 'power3.easeInOut',
                            onStart: () =>  setActive(trigger.id)
						})
					}
				},
				onEnter: () => {
					if (!isScrolling) {
						gsap.to(window, {
							scrollTo: { y: trigger.offsetTop, autoKill: false },
							duration: 0.7,
                            ease: 'power3.easeInOut',
                            onStart: () =>  setActive(trigger.id)
						})
					}
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
			{showDisclamer && <Disclamer onAccept={AcceptDisclamer} />}
			<Section1
				scrollingTo={activeSection}
				menuRef={$el => (menuRef = $el)}
				toggleMenu={clickFn}
				onScrollto={scrollMeTo}
				btn
			/>
			<Section2 scrollingTo={activeSection} />
			<Section3 scrollingTo={activeSection} />
			<Section4 scrollingTo={activeSection} />
		</div>
	)
}
