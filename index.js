document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".header .links a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 
      const targetId = link.getAttribute("href").substring(1); 
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",  
          block: "start",  
        });
      } else {
        console.error(`Section with ID '${targetId}' not found.`);
      }
    });
  });

  console.log("Smooth scrolling activated!");
});

document.addEventListener("DOMContentLoaded", () => {
 
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
