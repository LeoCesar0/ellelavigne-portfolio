import styles from "./styles.module.scss"

export const Hero = () => {
  return (
    <>
      <section className={`container ${styles.sectionHero} `}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Web Designer, front-end React desenvolvedora.
          </h1>
          <p className={styles.text}>
            Olá! me chamo Izaelle e sou web designer e desenvolvedora. Brasil📍
          </p>
          <div className={styles.icons}>
            <img src="github.svg" alt="logo do github" />
            <img src="linkedin.svg" alt="logo do linkedin" />
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
