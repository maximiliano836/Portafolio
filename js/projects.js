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
        <div class="title">
        <div class="project-title">${project.title}</div>
        <img class="project-image" src="${project.image}" alt="${
        project.title
      }">
        </div>
        <div class="project-description">${project.description}</div>
        <div class="project-technologies">Tecnologías: ${project.technologies.join(
          ", "
        )}</div>
        <div class="project-links">
          <a href="${project.repository}" target="_blank">Repositorio</a> | 
          <a href="${project.demo}" target="_blank">Demo</a>
        </div>
      `;
      projectsList.appendChild(projectsDiv);
    });
  })
  .catch((error) => {
    console.error("Hubo un problema con el fetch:", error);
  });
