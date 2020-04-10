function timer() {
    var now = new Date();
    var txt = document.getElementById("time");
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s % 2 == 0)
        txt.innerHTML = "<pre>" + h + ":" + m + "</pre>";
    else txt.innerHTML = "<pre>" + h + " " + m + "</pre>";
    setTimeout(timer, 500);

}