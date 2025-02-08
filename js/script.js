const trailCount = 15; 
const trails = [];
const trailContainer = document.getElementById('trail-0'); 

for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.id = `trail-${i}`;
    trailContainer.appendChild(trail); 
    trails.push(trail);
}

document.addEventListener('mousemove', (event) => {
    const x = Math.min(window.innerWidth - 30, Math.max(0, event.clientX)); 
    const y = Math.min(window.innerHeight - 30, Math.max(0, event.clientY)); 

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.transform = `translate(${x}px, ${y}px)`;
        }, index * 100);
    });
});

        