from pathlib import Path
from flask import Flask, render_template

BASE_DIR = Path(__file__).resolve().parent

# Vercel serves public assets directly; Flask only renders the HTML template.
app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=None,
)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
