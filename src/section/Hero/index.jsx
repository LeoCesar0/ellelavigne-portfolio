import styles from "./styles.module.scss"

export const Hero = () => {
  return (
    <>
      <section className={`container ${styles.sectionHero} `}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Web Designer, front-end React developer.
          </h1>
          <p className={styles.text}>
            Olá! me chamo Izaelle e sou web designer e desenvolvedora. Brasil📍
          </p>
          <div className={styles.icons}>
            <a target="blank" href="https://github.com/ElleLavigne">
              <img src="github.svg" alt="logo github" />
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/izaelle-avril-lavigne-brito-pessoa-18a62427a/"
            >
              <img src="linkedin.svg" alt="logo linkedin" />
            </a>
          </div>
          <div className={styles.techs}>
            <h3 className={styles.tech}>Tech</h3>
            <img src="html.svg" alt="" />
            <img src="css.svg" alt="" />
            <img src="js.svg" alt="" />
            <img src="react.svg" alt="" />
            <img src="figma.svg" alt="" />
          </div>
        </div>
        <img className={styles.avatar} src="avatar.png" alt="" />
      </section>
    </>
  )
}
