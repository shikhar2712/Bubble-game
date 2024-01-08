var hitn = 0;
function getnewHit() {
    hitn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitn;
}
function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 171; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 30;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }

        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h2>Game baj gaya Bhai tera</h2>`;
        }

    }, 1000)

}
var score = 0;
function calScore() {
    score += 10;
    document.querySelector("#scoreadd").textContent = score;

}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum == hitn) {
        calScore();
        makebubble();
        getnewHit();
    }
})

runtimer();
makebubble();
getnewHit();
