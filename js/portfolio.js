function menuToggle() {
  const menu = document.querySelector("#mobile-navbar .toggle-entry");
  menu.classList.toggle("active");
}

function showExperience(companyId) {
  const companyListItems = document.querySelectorAll(".company-list li");
  companyListItems.forEach((item) => item.classList.remove("active"));
  const activeItem = document.querySelector(
    `[onclick="showExperience('${companyId}')"]`
  );
  activeItem.classList.add("active");
  const experienceDetails = document.querySelectorAll(".experience-details");
  experienceDetails.forEach((detail) => detail.classList.remove("active"));
  document.getElementById(companyId).classList.add("active");
}
