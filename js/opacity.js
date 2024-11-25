const box = document.querySelector("#car-img");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      // Adjust opacity and border-radius based on scroll position
      const opacity = Math.max(0, 1 - scrollPosition / 1300); // Fade out gradually
      const radius = Math.min(50, scrollPosition / 10); // Increase border-radius gradually

      box.style.opacity = opacity;
      box.style.borderRadius = `${radius}%`;
    });