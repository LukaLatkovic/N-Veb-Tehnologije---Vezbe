const upload = document.getElementById('upload');
const preview = document.getElementById('preview');
const classification = document.getElementById('classification');
const description = document.getElementById('description');

let model = null;

async function loadModel() {
    if (!model) {
        classification.innerHTML = 'Učitavanje MobileNet modela...';
        model = await mobilenet.load();
    }

    return model;
}

upload.addEventListener('change', async () => {
    const file = upload.files[0];

    if (!file) {
        return;
    }

    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';

    classification.innerHTML = '<span class="loading">Analiza slike...</span>';
    description.innerHTML = '<span class="loading">Generisanje opisa...</span>';

    preview.onload = async () => {
        try {
            const loadedModel = await loadModel();
            const predictions = await loadedModel.classify(preview);

            classification.innerHTML = predictions
                .map(p => `${p.className} — ${(p.probability * 100).toFixed(2)}%`)
                .join('<br>');

            const topPrediction = predictions[0].className;

            const response = await fetch('/generate-description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    label: topPrediction,
                }),
            });

            const data = await response.json();

            description.innerHTML = data.text;
        } catch (error) {
            console.error(error);
            description.innerHTML = 'Došlo je do greške prilikom obrade slike.';
        }
    };
});