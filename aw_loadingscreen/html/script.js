document.addEventListener('DOMContentLoaded', function() {
    let progress = 0;
    const progressBar = document.querySelector('.progress');
    const loadingText = document.getElementById('loading-text');

    function updateProgress() {
        if (progress < 100) {
            progress += Math.random() * 10;
            progress = Math.min(progress, 100);
            progressBar.style.width = `${progress}%`;
            loadingText.textContent = `Chargement en cours... ${Math.round(progress)}%`;
            setTimeout(updateProgress, 200);
        } else {
            loadingText.textContent = 'Chargement terminé !';
        }
    }

    updateProgress();
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('background.mp3');
    audio.loop = true;  
    audio.volume = 0.5;  

    
    audio.play().catch(function(error) {
        console.error('Erreur lors de la lecture du son:', error);
    });
});
