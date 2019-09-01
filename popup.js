function s1()
{
  chrome.tabs.create({active: true,url: "https://ecsa.ntcu.edu.tw/login.aspx"});
}

function s2()
{
  chrome.tabs.create({active: true,url: "https://ecsb.ntcu.edu.tw/login.aspx"});
}
document.getElementById('link1').addEventListener('click', s1);
document.getElementById('link2').addEventListener('click', s2);
