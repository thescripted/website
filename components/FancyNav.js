import styles from "./FancyNav.module.css"
import { useState, useEffect } from "react"

export const FancyNav = ({ elementLocation }) => {
  const [viewP, setViewP] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  })

  const [active, setActive] = useState({
    Home: true,
    Projects: false,
    Contact: false,
  })

  const scrollEvent = () => {
    setViewP({
      top: window.scrollY,
      left: window.scrollX,
      bottom: window.innerHeight + window.scrollY,
      right: window.innerWidth + window.scrollX,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent)
    return () => {
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [])

  let triggerState = {
    Home: false,
    Projects: false,
    Contact: false,
  }

  useEffect(() => {
    Object.entries(elementLocation).map(item => {
      const DOMTop = item[1].top + 20 // A little hackey. TODO: Update Dom calculations
      const DOMBot = item[1].bottom - 20
      const DOMItem = item[0]
      if (DOMTop <= viewP.top && DOMBot >= viewP.top) {
        triggerState[DOMItem] = true
      } else if (DOMTop <= viewP.bottom && DOMBot >= viewP.bottom) {
        triggerState[DOMItem] = true
      } else if (DOMTop >= viewP.top && DOMBot <= viewP.bottom) {
        triggerState[DOMItem] = true
      }
    })
    setActive(triggerState)
  }, [viewP])

  return (
    <>
      <div className={styles.content}>
        <a
          href="#Home"
          className={`${styles.item} ${active.Home ? "active-item" : null}`}
        >
          Home
        </a>
        <a
          href="#Projects"
          className={`${styles.item} ${active.Projects ? "active-item" : null}`}
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={`${styles.item} ${active.Contact ? "active-item" : null}`}
        >
          Contact
        </a>
      </div>
    </>
  )
}
