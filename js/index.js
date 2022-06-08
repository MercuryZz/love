function timeElapse() {
    var now = Date();
    var start = new Date('2017-12-27T23:00:00')
    var elapsed = (Date.parse(now) - Date.parse(start)) / 1000;

    var day = Math.floor(elapsed / (3600 * 24));
    elapsed %= 3600 * 24;
    var hour = Math.floor(elapsed / 3600);
    if (hour < 10) hour = "0" + hour;
    elapsed %= 3600;
    var min = Math.floor(elapsed / 60);
    if (min < 10) min = "0" + min;
    var sec = elapsed % 60;
    if (sec < 10) sec = "0" + sec;

    var timer = "<span>" + day + " days " + hour + " hours " + min + " minutes " + sec + " seconds " + "</span>"
        // var timer = "<span>" + day + "</span> days <span>" + hour + "</span> hours <span>" + min + "</span> minutes <span>" + sec + "</span> seconds"
    var time = document.getElementById("time");
    time.innerHTML = timer;
}

function typeWord(text) {
    let textInnerHtml = text.innerHTML;
    text.innerHTML = "";

    let i = 0,
        timer = 0

    function typing() {
        if (i <= textInnerHtml.length) {
            text.innerHTML = textInnerHtml.slice(0, i++) + '_'
            timer = setTimeout(typing, 200)
        } else {
            text.innerHTML = textInnerHtml //结束打字,移除 _ 光标
            clearTimeout(timer)
        }
    }
    typing()
}

function deviceReact() {
    var width = window.screen.width;
    if (width < 500) {
        var time = document.getElementById("time");
        time.style.fontSize = 18 + "px";
    }
}