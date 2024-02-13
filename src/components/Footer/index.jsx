import { CONFIG } from "../../static/config"
import styles from "./styles.module.scss"
const { email, telefone, telefoneNumeros } = CONFIG
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.infos}>
            <h2 className={styles.title}>Fale comigo!</h2>
            <a
              target="_blank"
              className={styles.email}
              href={`mailto:${email}`}
            >
              Email: <strong>{email}</strong>
            </a>
            <a
              className={styles.telefone}
              target="_blank"
              href={`https://wa.me/${telefoneNumeros}`}
            >
              Telefone: <strong>{telefone}</strong>
              <img src="wpp.svg" />
            </a>
          </div>
          <div className={styles.socialmedia}>
            <img src="github.svg" alt="" />
            <img src="linkedin.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  )
}
