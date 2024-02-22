document.addEventListener('DOMContentLoaded', () => {
    const airplane = document.getElementById('airplane');
    const loadingBar1 = document.getElementById('loading-bar1');
    const progressText = document.getElementById('loading-progress');
    const loadingContainer = document.getElementById('loading-container');
    const loadingBarContainer = document.getElementById('loading-bar-container');
    
   console.log(airplane)

    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        document.body.style.transition = 'opacity 0.5s ease-out';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = 'home.html';
      }, 500); 
   
      } else {
        progress++;
        progressText.innerText = `${progress}% way to Rui's World`;
     
        const barWidth = loadingBarContainer.offsetWidth * (progress / 100);
        loadingBar1.style.width = `${barWidth}px`;
       
//        airplane.style.left = `${barWidth}px`;
      }
    }, 30); 
  });
  