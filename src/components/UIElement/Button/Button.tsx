import cx from 'classnames';
import styles from './Button.module.scss';
import { Button } from 'antd';
interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  children?: any;
  href?: any;
  target?: React.HTMLAttributeAnchorTarget;
  style: any;
  addClass?: any;
}
const ButtonCustom = (props: ButtonProps) => {
  const { addClass, children, className, disabled, style, onClick, href, target } = props;
  if (href) {
    return (
      <a
        style={style}
        className={cx(styles.btn, (styles as any)[className], addClass)}
        href={href}
        target={target}>
        {children}
      </a>
    );
  }

  return (
    <Button
      style={style}
      className={cx(styles.btnReal, (styles as any)[className], addClass)}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
