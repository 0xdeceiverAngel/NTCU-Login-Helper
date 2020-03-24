NTCU Login Helper
===
## Install
- install via Chrome Extension deceloper mode

## Features
- Modify refresh time
- Bypass verify code
- Popup short cut
- Block useless pictures
- Remove uselsee img tag
- Input horizontally
- Hide checkcode input bar

## Disclaimer
- Use it carefully
- If have any legal issue,we are not responsible for all the responsibility.

## Compare
before
![](https://raw.githubusercontent.com/0xdeciverAngel/NTCU-Login-Helper/master/img/before.png)
after
![](https://raw.githubusercontent.com/0xdeciverAngel/NTCU-Login-Helper/master/img/after.png)

## technic
When you request the stie,the checkcode has already hardcode in the login.aspx,so I inject the js to site.
```js
function doLogin() {
            var CheckCode = '90826';
            var tCheckCode = document.getElementById('txtCheckCode').value;

             if (CheckCode != '') {
                if (tCheckCode == '') {
                    alert('請輸入驗證碼!!');
                } else {
                    if (CheckCode == tCheckCode) {
                        document.getElementById('IsLogin').value = 'Y';
                        document.getElementById('StartCheck').value = '';
                        document.getElementById('ReBuildTheCheckCode').value = '';
                        myform.action = 'login.aspx';
                        myform.target = '_self';
                        myform.submit();
                    } else {
                        alert('驗證碼錯誤');
                    }
                }
            } else {
                alert('無驗證碼，請重新登入系統!');
            }
            
        }
```