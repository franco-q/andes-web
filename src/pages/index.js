import React, { useEffect } from "react"
import Section1 from "../components/section1"
import Section2 from "../components/section2"
import Section3 from "../components/section3"
import Section4 from "../components/section4"

import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger)

//pulse effet
//https://codepen.io/iamaandy/pen/YWPzYN?editors=1010

export default function Home() {
  function clickFn() {
    var menuAnimation = gsap.fromTo(
      ".nav-item",
      { opacity: 0, x: document.body.offsetWidth },
      {
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "circ",
        x: 0,
      }
    )
    menuAnimation.reversed() ? menuAnimation.play() : menuAnimation.reverse()
  }

  useEffect(() => {
    gsap.fromTo(
      ".mechanics-item-figure svg circle",
      1,
      { transformOrigin: "center center", autoAlpha: 1, scale: 1 },
      {
        repeat: -1,
        transformOrigin: "center center",
        autoAlpha: 0,
        scale: 1.5,
        ease: "power3.easeInOut",
      }
    )

    gsap.from(".campaing_gsap", {
      scrollTrigger: {
        trigger: ".section2 .campaing",
        start: "-50% center",
        end: "-10% 40%",
        scrub: 1,
      },
      opacity: 0,
      stagger: 0.1,
      ease: "circ",
      scale: 0.8,
      y: 200,
      duration: 1.2,
    })

    gsap.from(".mechanics-item", {
      scrollTrigger: {
        trigger: ".section3",
        start: "10% center",
        end: "20% center",
      },
      opacity: 0,
      stagger: 0.1,
      scale: 0.2,
      duration: 1,
    })

    gsap
      .timeline({
        scrollTrigger: ".section4",
        start: "-20% 80%",
        end: "50% 50%",
      })
      .from(".footer", {
        y: "-100vh",
        ease: "circ",
        scale: 5,
        duration: 0.7,
      })
      .from(".ubication", {
        x: "+=100vw",
        duration: 0.3,
      })
      .from(".footer > *", {
        opacity: 0,
        duration: 0.2,
      })
      .from(".ubication_gsap_1", {
        scale: 0.5,
        x: -500,
        stagger: 0.1,
      })

    gsap.from(".section2 > *", {
      scrollTrigger: {
        trigger: ".section2",
        start: "-20% 80%",
        end: "50% 50%",
      },
      x: "-100vw",
      duration: 0.7,
    })

    gsap.utils.toArray(".section").forEach((trigger, i) => {
      ScrollTrigger.create({
        trigger,
        start: "10% 90%",
        end: "90% 10%",
        onEnterBack: () => {
          gsap.to(window, {
            scrollTo: { y: trigger.offsetTop, autoKill: false },
            duration: 0.7,
            ease: "power3.easeInOut",
          })
        },
        onEnter: () => {
          gsap.to(window, {
            scrollTo: { y: trigger.offsetTop, autoKill: false },
            duration: 0.7,
            ease: "power3.easeInOut",
          })
        },
      })
    })
  }, [])

  return (
    <div>
      <Section1 toggleMenu={clickFn} />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}
