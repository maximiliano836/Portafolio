fetch("../jsons/projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar los productos");
    }
    return response.json();
  })
  .then((data) => {
    const projectsList = document.getElementById("projects");

    data.projects.forEach((project) => {
      const projectsDiv = document.createElement("div");
      projectsDiv.className = "project";

      projectsDiv.innerHTML = `
        <div class="card_proyect fade-in-on-scroll">
        <div class="project-title">${project.title}
        </div>
        <img class="project-image" src="${project.image}" alt="${
        project.title
      }">
        <div class="project-description">${project.description}
        </div>
        <div class="project-technologies">Technologies: ${project.technologies.join(
          ", "
        )}</div>
        <div class="project-links">
          <a href="${project.repository}" target="_blank">Repository</a> | 
          <a href="${project.demo}" target="_blank">Demo</a>
        </div>
        </div>
      `;
      projectsList.appendChild(projectsDiv);
    });
  })
  .catch((error) => {
    console.error("Hubo un problema con el fetch:", error);
  });

fetch("../jsons/achievements.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar los productos");
    }
    return response.json();
  })
  .then((data) => {
    const achievements = data.achievements;
    const achievementsList = document.getElementById("achievement");

    // Crear estructura del carrusel
    achievementsList.innerHTML = `
      <div class="carousel-achievements fade-in-on-scroll">
        <button class="carousel-btn prev-achievement">&lt;</button>
        <div class="carousel-track fade-in-on-scroll"></div>
        <button class="carousel-btn next-achievement">&gt;</button>
      </div>
    `;

    const track = achievementsList.querySelector(".carousel-track");

    achievements.forEach((achievements, idx) => {
      const achievementDiv = document.createElement("div");
      achievementDiv.className = "card_achievements";
      achievementDiv.style.display = idx === 0 ? "block" : "none"; // Solo el primero visible

      achievementDiv.innerHTML = `
        <div class="achievements-title-card">${achievements.title}</div>
        <img class="achievements-image" src="${achievements.img}" alt="${achievements.title}">
      `;
      track.appendChild(achievementDiv);
    });

    let current = 0;

    function showAchievement(index) {
      const cards = track.querySelectorAll(".card_achievements");
      cards.forEach((card, i) => {
        card.style.display = i === index ? "block" : "none";
      });
    }

    achievementsList.querySelector(".prev-achievement").onclick = () => {
      current = (current - 1 + achievements.length) % achievements.length;
      showAchievement(current);
    };

    achievementsList.querySelector(".next-achievement").onclick = () => {
      current = (current + 1) % achievements.length;
      showAchievement(current);
    };
  })
  .catch((error) => {
    console.error("Hubo un problema con el fetch:", error);
  });

  document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
});
 