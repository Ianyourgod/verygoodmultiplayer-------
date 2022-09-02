from flask import Flask,render_template,request

app = Flask(__name__)

coli=[]

def render():
    ret = ""
    ie = 1
    try:
        curx = coli[0][0]
        cury = coli[0][1]
    except IndexError:
        curx = -1
        cury = -1
    for ypos in range(10):
        for xpos in range(10):
            if ypos == cury and xpos == curx:
                ret += "⬛"
                try:
                    curx = coli[ie][0]
                    cury = coli[ie][1]
                except IndexError:
                    curx = -1
                    cury = -1
                ie += 1
            else:
                ret += "⬜"
        ret += "<br>"
    return ret

@app.route('/updot')
def client():
    global p1
    player = int(request.args.get('player'))
    try:
        coli[player-1] = [-1,-1]
    except IndexError:
        coli.append([-1,-1])
    coli[player-1][0] = int(request.args.get('x'))
    coli[player-1][1] = int(request.args.get('y'))
    data = {'player':player,'x':int(request.args.get('x')),'y':int(request.args.get('y')),'coli':coli}
    return render_template("screen.html",data=data)

if __name__ == "__main__":
    app.run(debug=True)