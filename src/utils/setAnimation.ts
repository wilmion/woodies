export const setAnimation = (
  style: string,
  value: string,
  element: HTMLElement
): void => {
  element.style[style] = value;
};
