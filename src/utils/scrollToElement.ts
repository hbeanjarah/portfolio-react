const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;

export const ScrollToElement = (element: any) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      element.current.scrollIntoView();
    }
  }
};
