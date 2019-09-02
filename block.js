chrome.webRequest.onBeforeRequest.addListener(
  function(){ return {cancel: true}; },
  {
    urls: ["*://ecsa.ntcu.edu.tw/Images/demo*"], // Change this to a more specific pattern

  },
  ["blocking"]
);
