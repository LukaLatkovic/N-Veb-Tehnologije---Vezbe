from flask import Flask, request, jsonify, render_template
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()

app = Flask(__name__)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate-description", methods=["POST"])
def generate_description():
    data = request.get_json()
    label = data.get("label", "nepoznat objekat")

    prompt = (
        "Napiši kratak, kreativan opis slike na srpskom jeziku. "
        f"Na slici je najverovatnije prikazano: {label}. "
        "Opis treba da ima 2 do 3 rečenice."
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            max_tokens=120,
            temperature=0.7,
        )

        text = response.choices[0].message.content.strip()

    except Exception as e:
        print(f"OpenAI API error: {e}")
        text = (
            f"Ovo je primer opisa za sliku na kojoj se nalazi {label}. "
            "Opis je generisan kao rezervna vrednost jer API trenutno nije dostupan."
        )

    return jsonify({
        "text": text
    })


if __name__ == "__main__":
    app.run(debug=True)