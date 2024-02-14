import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.scss"
import { Menu } from "../Menu"

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

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
    window.scroll({
      behavior:"smooth"
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
            <button
              className={styles.menu}
              onClick={() => {
                setMenuIsOpen(true)
              }}
            >
              <img src="menu.svg" alt="" />
            </button>
            <nav className={styles.links}>
             <h1 className={styles.name}>Izaelle Lavigne</h1>
              <a href="#projetos">Projetos</a>
              <a href="#sobre-mim">Sobre mim</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </div>
      </header>
      <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </>
  )
}
