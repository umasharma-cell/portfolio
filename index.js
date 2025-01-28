const sliderText = document.getElementById("slider-text");
    const texts = [
      "I am a Full Stack Developer",
      "I am a MERN Stack Developer",
      "I am an Aspiring Developer"
    ];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % texts.length; 
      sliderText.textContent = texts[index];
    }, 3000); 

    const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Offset for navbar height
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

function viewAndDownload() {
  // View the resume in a new tab
  window.open('https://drive.google.com/file/d/1OYJ3fDDklJKpS1-rdXu8W-oDYQUefoYb/view?usp=sharing', '_blank');

  // Download the resume
  var link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1OYJ3fDDklJKpS1-rdXu8W-oDYQUefoYb';
  link.download = 'Uma_Sharma_Resume.pdf'; // You can specify the filename here
  link.click();
}
