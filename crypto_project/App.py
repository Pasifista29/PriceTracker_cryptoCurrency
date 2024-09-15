from flask import Flask,render_template,redirect,request,url_for,session,flash
import sqlite3
import jwt
from datetime import datetime, timedelta,timezone

app = Flask(__name__)
app.secret_key="1234"

con=sqlite3.connect("database.db")
con.execute("create table if not exists users(uid integer primary key,username text,email text,password text)")
con.close()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/explore")
def explore():
    return render_template("explore_more.html")


@app.route("/login",methods=['GET','POST'])
def login():
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']
        con=sqlite3.connect("database.db")
        con.row_factory=sqlite3.Row
        cur=con.cursor()
        cur.execute("select * from users where username=? and password=?",(username,password))
        data=cur.fetchone()

        if data:
            session["username"]=data["username"]
            session["password"]=data["password"]
            # session["email"]="k@gmail.com"
            # session["password"]="k@gmail.com"
            session['logged_in'] = True
            token = jwt.encode({
                'user': request.form['username'],
                "exp": datetime.now(tz=timezone.utc)
            },
            app.config['SECRET_KEY'])
            return render_template("index.html")
        else:
            flash("username and password mismatch","warning")
    return redirect(url_for("signup"))

@app.route('/signup', methods=['GET','POST'])
def signup():
    if request.method=='POST':
        try:
            username=request.form['username']
            email=request.form['email']
            password=request.form['password']
            print(username,email,password)
            con=sqlite3.connect("database.db")
            cur=con.cursor()
            con.execute("insert into users(username,email,password)values(?,?,?)",(username,email,password))
            con.commit()
            flash("record added successfully","success")
        except:
            flash("error in insert operation","danger")
        finally:
            return render_template("index.html")
            con.close()
    return render_template('register.html')



if __name__ == "__main__":
    app.run(debug=True)