if (document.title.indexOf("國立臺中教育大學校園資訊系統") != -1) {
    var x = document.querySelectorAll(".input");
    // x[3].style.visibility="hidden";
    

    var actualCode = ['var iAllWaitTimes = 999999'].join('\n');
    var script = document.createElement('script');
    script.textContent = actualCode;

    (document.head||document.documentElement).appendChild(script);

}
