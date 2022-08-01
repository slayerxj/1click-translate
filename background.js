chrome.action.onClicked.addListener((tab) => {
  var newURL = "https://translate.google.com/translate?sl=auto&tl=zh-CN&hl=en&u=" + tab.url;
  chrome.tabs.create({ url: newURL });
});