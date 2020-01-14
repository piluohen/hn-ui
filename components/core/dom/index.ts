// 子元素是否出现在父元素
export const isInContainer = (el, container) => {
  if (!el || !container) {
    return false;
  }

  const elRect = el.getBoundingClientRect();
  let containerRect;
  const arr = [window, document, document.documentElement, null, undefined] as any;
  if (arr.includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};
