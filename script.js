chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
      "title": 'Search P5 for "%s"',
      "contexts": ["selection"],
      "id": "myContextMenuId"
  });
});
  
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  let functionToCheck = ''
  if(info.selectionText.endsWith("()")){
    functionToCheck = `${info.selectionText.substring(0, info.selectionText.length - 2)}`;
  } else {
    functionToCheck = `${info.selectionText}`
  }
  chrome.tabs.create({  
      url: "https://p5js.org/reference/#/p5/" + encodeURIComponent(functionToCheck)
  });
})