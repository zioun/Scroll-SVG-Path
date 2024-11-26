window.addEventListener("scroll", () => {
    const fixedLayer = document.getElementById("fixed-layers");

    if (window.scrollY >= 3100) {
        // Apply stepFour when scrollY >= 3100
        fixedLayer.classList.add("stepFour");
        fixedLayer.classList.remove("stepThree", "stepTwo", "stepOne", "show");
    } else if (window.scrollY >= 3000) {
        // Apply stepThree when 3000 <= scrollY < 3100
        fixedLayer.classList.add("stepThree");
        fixedLayer.classList.remove("stepFour", "stepTwo", "stepOne", "show");
    } else if (window.scrollY >= 2900) {
        // Apply stepTwo when 2900 <= scrollY < 3000
        fixedLayer.classList.add("stepTwo");
        fixedLayer.classList.remove("stepFour", "stepThree", "stepOne", "show");
    } else if (window.scrollY >= 2800) {
        // Apply stepOne when 2800 <= scrollY < 2900
        fixedLayer.classList.add("stepOne");
        fixedLayer.classList.remove("stepFour", "stepThree", "stepTwo", "show");
    } else if (window.scrollY >= 2700) {
        // Apply show when 2700 <= scrollY < 2800
        fixedLayer.classList.add("show");
        fixedLayer.classList.remove("stepFour", "stepThree", "stepTwo", "stepOne");
    } else {
        // Remove all classes when scrollY < 2700
        fixedLayer.classList.remove("show", "stepOne", "stepTwo", "stepThree", "stepFour");
        console.log("Classes removed");
    }
});


  
  
