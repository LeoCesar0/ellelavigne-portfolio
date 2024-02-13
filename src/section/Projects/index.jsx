import { CardProject } from "../../components/CardProject"
import styles from "./styles.module.scss"

export const Projects = () => {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <h2 className={styles.title}>Projetos</h2>
          <div className={styles.cards}>
            <CardProject
              title="Lossi"
              description={
                <>
                  <b>Site institucional</b> para uma marca de produtos
                  cosméticos. <b>Versão Desktop & Mobile.</b>
                </>
              }
              tools={["figma"]}
              figmalink={
                "https://www.figma.com/file/UifcireseDF7eVbFDJcnKU/Landing-Page-%7C-Web-site?type=design&t=Lh7NONr7qjo7iUKY-6"
              }
              cardImg={"card-img-lossi.png"}
            />
            <CardProject
              title="Lossi"
              description={
                <>
                  <b>E-commerce</b> para uma marca de produtos cosméticos.{" "}
                  <b>Versão Desktop & Mobile.</b>
                </>
              }
              tools={["figma"]}
              figmalink={
                "https://www.figma.com/file/uiMYccnfTUEVCtYKdWTAtQ/eCommerce-Website-%2F-Lossi?type=design&t=q1kY6tSUHiB8CfBZ-6"
              }
              cardImg={"card-img-lossi-e.png"}
            />
            <CardProject
              buttonTextColor="#FFF0F4"
              buttonColor="#253535"
              title="Overwatch heroes"
              description={
                <>
                  Estudo do fetch api para listagem de todos os heróis do jogo
                  overwatch 2.
                </>
              }
              tools={["html", "css", "js", "react", "figma"]}
              githubLink={"https://github.com/ElleLavigne"}
              figmalink={
                "https://www.figma.com/file/0CeSt8LqWQETlbfT6ERyD5/Overwatch-heros?type=design&t=q1kY6tSUHiB8CfBZ-6"
              }
              cardImg={"card-img-ow.png"}
            />
          </div>
        </div>
      </main>
    </>
  )
}
