document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".mini-nav a");
  
	window.addEventListener("scroll", () => {
	  let currentSectionId = "";
  
	  sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		const sectionTop = rect.top;
		const sectionHeight = rect.height;
  
		// Check if section is in viewport (top is above midpoint of screen)
		if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
		  currentSectionId = section.getAttribute("id");
		}
	  });
  
	  navLinks.forEach((link) => {
		const href = link.getAttribute("href").substring(1);
		link.classList.toggle("active", href === currentSectionId);
	  });
	});
  });