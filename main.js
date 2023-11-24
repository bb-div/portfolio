document.body.classList.add("no-scroll");

setTimeout(function () {
  let loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.opacity = "0";

  setTimeout(function () {
    loadingScreen.style.display = "none";
    document.body.classList.remove("no-scroll");

    // Fügt die fade-in Klasse zu den Header-Elementen hinzu
    let headerContents = document.querySelectorAll(".header");
    headerContents.forEach(function (element) {
      element.classList.add("fade-in");
    });
  }, 1500); // Wartet, bis der Ladebildschirm ausgeblendet ist
}, 3000); // Zeit, die der Ladebildschirm angezeigt wird

document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(
    ".section-description, .section-title"
  ); // Klasse Ihrer Elemente
  const windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const revealPoint = 150; // Anpassbar, wie weit im Viewport das Element sein soll

    if (elementPosition < windowHeight - revealPoint) {
      element.classList.add("fade-in-view");
    }
  });
});
