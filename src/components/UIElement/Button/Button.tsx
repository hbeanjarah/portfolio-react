import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  children?: any;
  href?: any;
  target: React.HTMLAttributeAnchorTarget;
  style: any;
  addClass?: any;
}
const Button = (props: ButtonProps) => {
  const { addClass, children, className, disabled, style, onClick, type, href, target } = props;
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
    <button
      style={style}
      className={cx(styles.btn, (styles as any)[className], addClass)}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
