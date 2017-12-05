export const getWidth = domNode => {
  const style = getComputedStyle(domNode);
  return parseFloat(style.width.replace(/([^0-9.])/, ""));
};
