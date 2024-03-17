import { useState } from "react";
import { CardProject } from "../../components/CardProject";
import { PROJECTS } from "../../static/projects";
import styles from "./styles.module.scss";
import { useMemo } from "react";

export const Projects = () => {
  const [projectOnView, setProjectsOnView] = useState(2);

  const seeMore = () => {
    setProjectsOnView(prev => prev + 3);
  }

  const projectsList = useMemo(() => {
    return PROJECTS.slice(0, projectOnView);
  }, [PROJECTS, projectOnView])

  return (
    <>
      <main className={styles.main} id="projetos">
        <div className="container">
          <h2 className={styles.title}>Projetos</h2>
          <div className={styles.cards}>
            {projectsList.map((project, index) => {
              return (
                <CardProject
                  key={project.title + "-" + index}
                 {...project}
                />
              );
            })}
            {projectsList.length < PROJECTS.length && (
              <button className={styles.seeMore} onClick={seeMore}>
                Ver mais
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
