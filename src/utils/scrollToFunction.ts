import { animateScroll } from './animateScroll';

const logError = () =>
  console.error(`Invalid element, are you sure you've provided element id or react ref?`);

const getElementPosition = (element: any) => element.offsetTop;

export const scrollToFunction = (ref: any, duration: number) => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = ref ? ref.current : null;

  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll(getElementPosition(element), initialPosition, duration);
};
