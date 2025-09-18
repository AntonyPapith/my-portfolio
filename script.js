    // ✅ Dynamic animation handling
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".slide-text span");
  const total = texts.length;
  let current = 0;
  const interval = 2000; // 2s per word

  // Initialize
  texts.forEach((t) => t.classList.remove("active", "exit"));
  texts[current].classList.add("active");

  setInterval(() => {
    const prev = current;
    current = (current + 1) % total;

    texts[prev].classList.remove("active");
    texts[prev].classList.add("exit");

    texts[current].classList.remove("exit");
    texts[current].classList.add("active");
  }, interval);
});
    
    // Scroll animation
    function reveal() {
      let reveals = document.querySelectorAll(".reveal, .reveal-right");
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    reveal();
    
    // Sidebar toggle
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");
    const navLinks = sidebar.querySelectorAll("a");

    // Open sidebar
    menuBtn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
    });

    // Close sidebar
    function closeSidebar() {
      sidebar.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    }

    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
    navLinks.forEach(link => link.addEventListener("click", closeSidebar));