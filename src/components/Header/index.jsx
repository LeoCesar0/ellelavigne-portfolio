import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
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
      </header>
    </>
  )
}
