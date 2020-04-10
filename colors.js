function changeColors() {
    var textWhite = true;
    var bgrgb = [parseInt(Math.random() * 255), parseInt(Math.random() * 255), parseInt(Math.random() * 255)];
    for (var i = 0; i < bgrgb.length; i++) {
        if (bgrgb[i] > 192) {
            textWhite = false;
        }
    }
    document.getElementById("container").style.backgroundColor = "rgb(" + bgrgb[0] + "," + bgrgb[1] + "," + bgrgb[2] + ")";
    if (textWhite) {
        document.getElementById("time").style.color = "rgba(255,255,255,.5)";
    } else if (!textWhite) {
        document.getElementById("time").style.color = "rgba(0,0,0,.5)";
    }
    setTimeout(changeColors, 10 * 1000);
}