import Typewriter from 'typewriter-effect';

interface TypewriterProps {
  strings: string | string[];
  cursorClassName: string;
  wrapperClassName: string;
}
const AppTypewriter = (props: TypewriterProps) => {
  const { cursorClassName, strings, wrapperClassName } = props;
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName,
        cursorClassName
      }}
    />
  );
};

export default AppTypewriter;
