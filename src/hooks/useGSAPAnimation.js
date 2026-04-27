import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useGSAPAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('[data-animate="reveal"]')
      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      const staggerGroups = gsap.utils.toArray('[data-animate="stagger"]')
      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll('[data-stagger-item]')
        if (!items.length) {
          return
        }

        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])
}
