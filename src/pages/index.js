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

export default function Home() {
  var menuAnimation

  function clickFn() {
    menuAnimation && menuAnimation.reversed()
      ? menuAnimation.play()
      : menuAnimation.reverse()
  }

  useEffect(() => {
    menuAnimation = gsap.fromTo(
      ".nav-item",
      { opacity: 0, x: document.body.offsetWidth },
      {
        opacity: 1,
        duration: 0.3,
        reversed: true,
        stagger: 0.1,
        ease: "circ",
        x: 0,
      }
    )
    gsap.fromTo(
      ".mechanics-item-figure svg #pulse",
      1.7,
      { transformOrigin: "center center", autoAlpha: 1, scale: 1 },
      {
        repeat: -1,
        transformOrigin: "center center",
        autoAlpha: 0,
        scale: 1.3,
        ease: "back.out(1.7)",
      }
    )

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
        scrollTrigger: {
          trigger: ".section4",
          start: "top center",
          end: "top center",
        },
      })
      .from(".footer", {
        ease: "circ",
        scale: 20,
        duration: 0.3,
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
      opacity: 0,
      duration: 0.5,
    })

    gsap.utils.toArray(".section").forEach((trigger, i) => {
      ScrollTrigger.create({
        trigger,
        start: "5% 95%",
        end: "95% 5%",
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
