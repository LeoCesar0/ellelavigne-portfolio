import { CardProject } from "../../components/CardProject";
import { PROJECTS } from "../../static/projects";
import styles from "./styles.module.scss";

export const Projects = () => {
  return (
    <>
      <main className={styles.main} id="projetos">
        <div className="container">
          <h2 className={styles.title}>Projetos</h2>
          <div className={styles.cards}>
            {PROJECTS.map((project, index) => {
              return (
                <CardProject
                  key={project.title + "-" + index}
                 {...project}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
