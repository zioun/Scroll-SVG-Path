const img = document.querySelector("#car-img img");
const svg = document.querySelector("#car-svg svg");
const textTitle = document.querySelector("#text-title");
const textPara = document.querySelector("#text-para");

// Set initial styles for textPara
textPara.style.opacity = "0";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Calculate opacity and width for img and svg
  const opacity = Math.max(0, 1 - scrollPosition / 900); // Fade out gradually
  const width = Math.min(75, 65 + scrollPosition / 260); // Gradually increase width

  // Apply styles to img and svg
  img.style.opacity = opacity;
  img.style.setProperty("width", `${width}%`, "important");
  svg.style.setProperty("width", `${width}%`, "important");

  // Fade out textTitle smoothly at 500px
  if (scrollPosition >= 500) {
    textTitle.style.transition = "opacity 0.5s ease"; // Smooth transition
    textTitle.style.opacity = "0";
  } else {
    textTitle.style.transition = "opacity 0.5s ease"; // Smooth transition
    textTitle.style.opacity = "1";
  }

  // Fade in textPara smoothly at 700px
  if (scrollPosition >= 700) {
    textPara.style.transition = "opacity 0.5s ease"; // Smooth transition
    textPara.style.opacity = "1";
  } else {
    textPara.style.transition = "opacity 0.5s ease"; // Smooth transition
    textPara.style.opacity = "0";
  }
});
