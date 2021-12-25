import styles from './BackgroundSection.module.scss';

interface BackgroundSectionProps {
  children: any;
}
const BackgroundSection = (props: BackgroundSectionProps) => {
  const { children } = props;
  return <div className={styles.backgroundSection}>{children}</div>;
};

export default BackgroundSection;
