import styles from "./styles.module.scss"

export const CardProject = ({
  title,
  description,
  tools,
  buttonTextColor = "#3A121E",
  buttonColor = "#F4B7C4",
  figmalink,
  githubLink,
  cardImg,
}) => {
  const buttonStyle = { backgroundColor: buttonColor, color: buttonTextColor }
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.titleCard}>{title}</h3>
        <div className={styles.cardContainer}>
          <div className={styles.content}>
            <div className={styles.textCard}>
              <p className={styles.description}>{description}</p>
              <div className={styles.tools}>
                <h3 className={styles.toolsTitle}>Tools</h3>
                {tools.map((tool) => {
                  return (
                    <img
                      key={`${title}-${tool}`}
                      className={styles.icon}
                      src={`${tool}.svg`}
                      alt=""
                    />
                  )
                })}
              </div>
              <div className={styles.buttons}>
                {figmalink && (
                  <a
                    style={buttonStyle}
                    className={styles.bntCard}
                    target="blank"
                    href={figmalink}
                  >
                    Figma
                  </a>
                )}

                {githubLink && (
                  <a
                    style={buttonStyle}
                    className={styles.bntCard}
                    target="blank"
                    href={githubLink}
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
          <img className={styles.cardImg} src={cardImg} alt="" />
        </div>
      </div>
    </>
  )
}
