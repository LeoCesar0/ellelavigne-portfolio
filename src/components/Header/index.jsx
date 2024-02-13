import { useEffect, useRef } from "react"
import styles from "./styles.module.scss"

export const Header = () => {
  const headerRef = useRef(null)
  useEffect(() => {
    const initialScroll = window.scrollY
    const listener = window.addEventListener("scroll", (event) => {
      const offSet = window.scrollY - initialScroll
      if (offSet > 20) {
        headerRef.current.classList.add(styles.scroll)
      } else {
        headerRef.current.classList.remove(styles.scroll)
      }
    })
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])
  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className="container">
          <div className={styles.content}>
            <p className={styles.logo}>Izaelle Lavigne</p>
            <button className={styles.menu}>
              <img src="menu.svg" alt="" />
            </button>
            <nav className={styles.links}>
              <a href="#">Izaelle Lavigne</a>
              <a href="#projetos">Projetos</a>
              <a href="#sobre-mim">Sobre mim</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
