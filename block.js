chrome.webRequest.onBeforeRequest.addListener(
  function(){ return {cancel: true}; },
  {
    urls: ["*://ecsa.ntcu.edu.tw/Images/*"], // Change this to a more specific pattern

  },
  ["blocking"]
);
