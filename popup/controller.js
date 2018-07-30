var enabled = false;
var enableText = 'Maximize width!';
var disableText = 'Put it back...';

document.addEventListener('DOMContentLoaded', function() {
  var maxWidthBtn = document.querySelector('.github-width-popup__button');

  maxWidthBtn.addEventListener('click', function() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      var activeTab = tabs[0];
  
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