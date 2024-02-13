import styles from "./styles.module.scss"
export const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}
        onClick={() => {
          setIsOpen(false)
        }}
      >
        <aside
          className={styles.aside}
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          <p className={styles.title}>Izaelle Lavigne</p>
          <nav className={styles.links}>
            <a href="#projetos">Projetos</a>
            <a href="#sobre-mim">Sobre Mim</a>
            <a href="#contato">Fale Comigo</a>
          </nav>
          <div className={styles.linkIcons}></div>
        </aside>
      </div>
    </>
  )
}
