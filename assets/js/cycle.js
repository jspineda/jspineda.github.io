	
//Declarations
const container = document.querySelector('#intro');
const bgani = document.querySelector('.animate');
const screen = document.querySelector('.content');
const bgElement = document.querySelector('.bgcontain');


const images = [
    'assets/images/SDO_HMIIC.png',
    'assets/images/solar_euv.png'];

let currentIndex = 1;
let intervalId;
let isResizing = false;


//functions
function changeBackground() {
    screen.style.backgroundColor = 'rgba(0,0,0,1)';
	//container.style.opacity = 0; // Fade out
    setTimeout(() => {
        container.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
		//container.style.opacity = 1; //Fade in
		screen.style.backgroundColor = 'rgba(0,0,0,0)'
    }, 2000); // Wait for fade-out to complete
}

// Start cycling images
function startCycling() {
	if (!isResizing) {
                intervalId = setInterval(changeBackground, 7000); // Change every 7 seconds
            }
        }

// Pause cycling
function pauseCycling() {
            clearInterval(intervalId);
        }


function setBackgroundSize() {
            //const width = window.innerWidth; // Initial window width
            const height = Math.max(window.innerHeight,300); // Initial window height
            //bgElement.style.width = `${width}px`;
            bgElement.style.height = `${height}px`;
	        screen.style.height = `${height}px`;
        }


// Set the background size on page load
window.addEventListener('load', setBackgroundSize);


// Listen for resizing
window.addEventListener('resize', () => {
	if (!isResizing) {
                isResizing = true;
				bgani.classList.add('is-resizing');
                pauseCycling(); // Pause animation during resizing
				//setBackgroundSize();
            }
	clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(() => {
                isResizing = false;
				bgani.classList.remove('is-resizing');
                startCycling(); // Resume animation after resizing
            }, 500); // 500ms delay after resizing stops
        });

startCycling();
        
