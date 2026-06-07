from pathlib import Path

import cv2
import matplotlib.pyplot as plt
from shiny import App, reactive, render, ui


cascade_path = cv2.data.haarcascades + "haarcascade_russian_plate_number.xml"
plate_cascade = cv2.CascadeClassifier(cascade_path)


app_ui = ui.page_fluid(
    ui.tags.head(
        ui.tags.style(
            """
            body {
                background: #f4f6f9;
                color: #222;
                font-family: Arial, sans-serif;
            }

            .container {
                max-width: 1000px;
                margin: 30px auto;
                padding: 24px;
                background: #ffffff;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            }

            h1 {
                color: #660000;
                margin-bottom: 8px;
            }

            .subtitle {
                color: #555;
                margin-bottom: 24px;
            }

            .info {
                padding: 12px;
                background: #f8fafc;
                border-left: 4px solid #990000;
                margin-bottom: 20px;
            }
            """
        )
    ),

    ui.div(
        {"class": "container"},
        ui.h1("Vežba 25.1 — Detekcija registarskih tablica"),
        ui.p(
            "Otpremite sliku automobila. Aplikacija pokušava da pronađe "
            "registarsku tablicu i obeleži je pravougaonikom.",
            class_="subtitle",
        ),
        ui.div(
            "Koristi se OpenCV Haar cascade model za detekciju registarskih tablica.",
            class_="info",
        ),
        ui.input_file(
            "slika",
            "Otpremi sliku:",
            multiple=False,
            accept=[".jpg", ".jpeg", ".png"],
        ),
        ui.output_text_verbatim("poruka"),
        ui.output_plot("rezultat"),
    )
)


def server(input, output, session):
    @reactive.Calc
    def obradi_sliku():
        fileinfo = input.slika()

        if not fileinfo:
            return None, "Nije otpremljena nijedna slika."

        filepath = Path(fileinfo[0]["datapath"])

        img = cv2.imread(str(filepath))

        if img is None:
            return None, "Slika nije uspešno učitana."

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        plates = plate_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=4,
            minSize=(60, 20),
        )

        for (x, y, w, h) in plates:
            cv2.rectangle(
                img,
                (x, y),
                (x + w, y + h),
                (0, 255, 0),
                3,
            )

        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        if len(plates) == 0:
            message = "Nije pronađena registarska tablica na slici."
        elif len(plates) == 1:
            message = "Pronađena je 1 moguća registarska tablica."
        else:
            message = f"Pronađeno je {len(plates)} mogućih registarskih tablica."

        return img_rgb, message

    @output
    @render.text
    def poruka():
        _, message = obradi_sliku()
        return message

    @output
    @render.plot
    def rezultat():
        img_rgb, _ = obradi_sliku()

        if img_rgb is None:
            return None

        plt.figure(figsize=(10, 6))
        plt.imshow(img_rgb)
        plt.axis("off")
        plt.title("Rezultat detekcije registarske tablice")

        return plt.gcf()


app = App(app_ui, server)