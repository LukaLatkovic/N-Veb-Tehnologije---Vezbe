# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify, render_template
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)

client = OpenAI(api_key=api_key)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate-quiz", methods=["POST"])
def generate_quiz():
    data = request.get_json()
    topic = data.get("topic", "opšte znanje")

    prompt = (
        "Napravi kviz na srpskom jeziku. "
        f"Tema kviza je: {topic}. "
        "Kviz treba da ima 5 pitanja. "
        "Svako pitanje treba da ima 4 ponuđena odgovora označena slovima A, B, C i D. "
        "Na kraju svakog pitanja napiši tačan odgovor."
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
            max_tokens=700,
            temperature=0.7,
        )

        quiz = response.choices[0].message.content.strip()

    except Exception as e:
        print("OPENAI API ERROR:")
        print(type(e).__name__)
        print(e)

        quiz = (
            "(Fallback primer kviza)\n\n"
            f"Tema: {topic}\n\n"
            "1. Koji je glavni grad Srbije?\n"
            "A) Zagreb\n"
            "B) Sarajevo\n"
            "C) Beograd\n"
            "D) Podgorica\n"
            "Tačan odgovor: C\n\n"
            "2. Šta označava HTML?\n"
            "A) HyperText Markup Language\n"
            "B) High Transfer Machine Language\n"
            "C) Home Tool Markup List\n"
            "D) Hyperlink Text Main Language\n"
            "Tačan odgovor: A"
        )

    return jsonify({
        "quiz": quiz
    })


if __name__ == "__main__":
    app.run(debug=True)