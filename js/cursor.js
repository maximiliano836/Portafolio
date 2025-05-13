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
    // Usar pageX y pageY para incluir el desplazamiento de la página
    const x = Math.min(window.innerWidth, Math.max(0, event.pageX)); 
    const y = Math.min(window.innerHeight + window.scrollY, Math.max(0, event.pageY)); 

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.transform = `translate(${x}px, ${y}px)`;
        }, index * 100);
    });
});