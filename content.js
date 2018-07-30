let originalStyles;
const maximizedStyles = {
  width: '100%',
  paddingLeft: '2rem', 
  paddingRight: '2rem',
};

const preserveOriginalStyles = ({ style }) => {
  const { width, paddingLeft, paddingRight } = style;
  
  return {
    width,
    paddingLeft,
    paddingRight,
  };
};

const toggleMaximizeContainers = (toggle) => {
  document.querySelectorAll('.application-main .container')
    .forEach((container) => {
      originalStyles = originalStyles || preserveOriginalStyles(container);
      Object.assign(container.style, toggle ? maximizedStyles : originalStyles);
     
    });
}

chrome.runtime.onMessage.addListener(function(request) {
  toggleMaximizeContainers(request.enable);
});