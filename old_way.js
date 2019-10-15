// Checking page title
if (document.title.indexOf("國立臺中教育大學校園資訊系統") != -1) {


    var btn = document.createElement("BUTTON")
	  btn.className="inj";
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);

	  btn.addEventListener('click', function()
	   {
         var arr="";
         var i=0
         for (i=0;i<5;i++)
         {
           var a=Math.floor(Math.random() * 10);
           arr+=a.toString(10);
         }
        // alert(arr);

	    document.getElementById('IsLogin').value = 'Y';
        document.getElementById('StartCheck').value = '';
        document.getElementById('ReBuildTheCheckCode').value = '';
        myform.action = 'login.aspx';
        myform.target = '_self';
        document.getElementById('txtCheckCode').value=arr;
        myform.submit();
	   }
	);


}
