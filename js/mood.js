export function mood(instance) {
    console.log("mood.js called")

    const emotionImages = document.querySelectorAll('.emotionimg');

    emotionImages.forEach(image => {
        image.addEventListener('click', () => {
            const mood = image.dataset.mood;
            switch (mood) {
                case 'joy':
                    instance.joy.boBa();
                    break;
                case 'sad':
                    instance.sad.boBa();
                    break;
                case 'angry':
                    instance.angry.boBa();
                    break;
                case 'disgust':
                    instance.disgust.boBa();
                    break;
                case 'fear':
                    instance.fear.boBa();
                    break;
                case 'all':
                    instance.allEmotions.boBa();
                    break;
            }
        });
    });
}
