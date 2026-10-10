
from pathlib import Path
from flask import Flask, render_template, send_from_directory

BASE_DIR = Path(__file__).resolve().parent

app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static")
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/css/<path:filename>")
def css(filename):
    return send_from_directory(BASE_DIR / "public" / "css", filename)

@app.route("/js/<path:filename>")
def js(filename):
    return send_from_directory(BASE_DIR / "public" / "js", filename)

if __name__ == "__main__":
    print("FurCast running from:", BASE_DIR)
    print("CSS exists:", (BASE_DIR / "public" / "css" / "style.css").exists())
    print("Registered routes:")
    print(app.url_map)
    app.run(debug=True, port=5001)
