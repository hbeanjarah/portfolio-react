import React, { useState } from 'react';
import { INIT_PROJECT, ProjectInterface, PROJECTS } from '../../constant/project';
import ProjectCard from './ProjectCard';
import { Row } from 'antd';
import styles from './Project.module.scss';
import ModalComponent from '../../components/UIElement/Modal';
import ModalProjectCard from './ModalProjectCard';
const Project = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [project, setProject] = useState<ProjectInterface>(INIT_PROJECT);
  return (
    <div className={styles.content} id="section-porject">
      <h1 className={styles.title}>My Recent Works</h1>
      <p className={styles.subtitle}>Here are a few projects I've worked on recently.</p>

      <Row className={styles.projects}>
        {PROJECTS.map((currentProject) => (
          <ProjectCard
            setOpen={setOpen}
            key={currentProject.id}
            setProject={setProject}
            currentProject={currentProject}
          />
        ))}
      </Row>
      <ModalComponent
        open={open}
        onClose={() => setOpen(false)}
        children={<ModalProjectCard project={project} />}
      />
    </div>
  );
};

export default Project;
