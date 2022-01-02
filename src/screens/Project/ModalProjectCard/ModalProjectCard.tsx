import styles from './ModalProjectCard.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProjectInterface, PROJECTS } from '../../../constant/project';
import Button from '../../../components/UIElement/Button/Button';

interface ModalProjectCardProps {
  project: ProjectInterface;
}
const ModalProjectCard = (props: ModalProjectCardProps) => {
  const { project } = props;

  return (
    <div className={styles.cardWrapper}>
      <LazyLoadImage
        alt="project-img"
        src={project.image.src}
        effect="blur"
        width="100%"
        wrapperClassName={styles.image}
        placeholderSrc={project.image.placeholderSrc}
      />

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.technologies}>
          {project &&
            project.technologies.map((tech: any, index: number) => <span key={index}>{tech}</span>)}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Button
          style={{ width: '12rem' }}
          className="primary"
          href={project.links.site}
          target="_blank">
          <FaExternalLinkAlt /> &nbsp; View project
        </Button>

        <Button
          style={{ width: '12rem' }}
          className="primary"
          href={project.links.repo}
          target="_blank">
          <FaExternalLinkAlt /> &nbsp; Know more
        </Button>
      </div>
    </div>
  );
};

export default ModalProjectCard;
