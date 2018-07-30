var maximizedSidePadding = '2rem';
var originalStyles;
var maximizedStyles = {
  width: '100%',
  paddings: '2rem' 
};
var containerElements = document.querySelectorAll('.application-main .container');

function preserveOriginalStyles(container) {
  return {
    width: container.style.width,
    paddings: container.style.paddingLeft
  };
}

function toggleMaximizeContainers (toggle) {
  containerElements.forEach(function (container) {
    if (!originalStyles) {
      originalStyles = preserveOriginalStyles(container);
    }
    setContainerStyles(container, toggle ? maximizedStyles : originalStyles)
  });
}

function setContainerStyles (container, styles) {
  container.style.width = styles.width;
  container.style.paddingLeft =
    container.style.paddingRight = styles.paddings;
}

chrome.runtime.onMessage.addListener(function(request) {
  toggleMaximizeContainers(request.enable);
});