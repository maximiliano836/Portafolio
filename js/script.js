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
        <div class="card_proyect">
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
    const achievementsList = document.getElementById("achievements");

    data.achievements.forEach((achievements) => {
      const achievementsDiv = document.createElement("div");
      achievements.className = "achievements";

      achievements.innerHTML = `
        <div class="card_achievements">
        <div class="achievements-title">${achievements.title}
        </div>
        <img class="achievements-image" src="${achievements.image}" alt="${
        achievements.title
      }">
        </div>
      `;
      achievementsList.appendChild(achievementsDiv);
    });
  })
  .catch((error) => {
    console.error("Hubo un problema con el fetch:", error);
  });
