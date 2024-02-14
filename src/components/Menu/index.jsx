import styles from "./styles.module.scss"
export const Menu = ({ isOpen, setIsOpen }) => {
  const close = () => {
    setIsOpen(false)
  }
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
            <a
              href="#projetos"
              onClick={() => {
                close()
              }}
            >
              Projetos
            </a>
            <a
              href="#sobre-mim"
              onClick={() => {
                close()
              }}
            >
              Sobre Mim
            </a>
            <a
              href="#contato"
              onClick={() => {
                close()
              }}
            >
              Fale Comigo
            </a>
          </nav>
          <div className={styles.linkIcons}></div>
        </aside>
      </div>
    </>
  )
}
