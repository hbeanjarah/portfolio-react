import styles from './ProjectCard.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col } from 'antd';
import { Card } from 'antd';
import { ProjectInterface } from '../../../constant/project';
const { Meta } = Card;
interface ProjectCardProps {
  currentProject: ProjectInterface;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProject: React.Dispatch<React.SetStateAction<ProjectInterface>>;
}
const ProjectCard = (props: ProjectCardProps) => {
  const { currentProject, setProject, setOpen } = props;
  const { id, description, image, title } = currentProject;

  const handleOpen = () => {
    console.log('cliecked');

    setOpen(true);
    setProject(currentProject);
  };
  return (
    <Col span={6} className={styles.purple}>
      <Card
        onClick={() => handleOpen()}
        hoverable
        className={styles.cardWrapper}
        cover={
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        }>
        <Meta
          title={<h3 className={styles.title}>{title}</h3>}
          description={<p className={styles.description}>{description}</p>}
        />
      </Card>
    </Col>
  );
};

export default ProjectCard;
