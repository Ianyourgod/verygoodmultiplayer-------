document.onkeyup = function (e) {
    e = e || window.event;
    // use e.keyCode
    kc = e.keyCode

    if (kc === 87) {
        y -= 1
    } else if (kc === 83) {
        y += 1
    } else if (kc === 68) {
        x += 1
    } else if (kc === 65) {
        x -= 1
    }
};

function render() {
    let ret = "";
    try {
        var curx = coli[0][0]
        var cury = coli[0][1]
    } catch (error) {
        var curx = -1
        var cury = -1
    }
    let ie = 1;
    for (ycor = 0;ycor < 10;ycor++) {
        for (xcor=0;xcor<10;xcor++) {
            if (ycor == cury && xcor == curx) {
                ret += "⬛"
                try {
                    curx = coli[ie][0]
                    cury = coli[ie][1]
                } catch (error) {
                    curx = -1
                    cury = -1
                }
                ie += 1
            } else {
                ret += "⬜"
            }
        }
        ret += "<br>"
    }
    document.getElementById("screen").innerHTML = ret
}

setInterval(function() {
    render()
    window.location.href = 'http://localhost:5000/updot?player='+player+"&x="+x+"&y="+y;
},750)