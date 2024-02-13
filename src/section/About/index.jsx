import styles from "./styles.module.scss"

export const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <h2 className={styles.title}>Sobre Mim</h2>
          <div className={styles.aboutme}>
            <p className={styles.description}>
              Olá! 👋 Meu nome é Izaelle Lavigne, sou apaixonada por criar
              experiências digitais. Atualmente, estou nos estudos de web design
              e programação, explorando o mundo da criação online.
              <br />
              Desde que iniciei minha jornada, tenho tido a oportunidade de
              aprimorar minhas habilidades em <strong>design responsivo, UX/UI e
              programação front-end.</strong> Tenho um olhar atento aos detalhes e uma
              paixão por criar soluções visualmente atraentes que também
              ofereçam uma experiência de usuário excepcional.
            </p>
            <img className={styles.profile} src="profile.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
