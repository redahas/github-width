let enabled = false;
const enableText = 'Maximize width!';
const disableText = 'Put it back...';

document.addEventListener('DOMContentLoaded', () => {
  const maxWidthBtn = document.querySelector('.github-width-popup__button');

  maxWidthBtn.addEventListener('click', () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      const activeTab = tabs[0];
  
      chrome.tabs.sendMessage(activeTab.id, {
        'enable': !enabled
      });
      enabled = !enabled;
      maxWidthBtn.innerHTML = enabled
        ? disableText
        : enableText;
      maxWidthBtn.classList[enabled ? 'add' : 'remove']('github-width-popup__button--disable');
    });
  });
});