/* ==========================================================
   GALIH PATMA - PORTFOLIO INTERACTIVITY SCRIPT
   Dynamic Typewriter Effect & Micro-Interactions
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Mobile Developer',
    'Cross-Platform Dev',
    'Flutter Specialist',
    'Web & Mobile Developer',
    'Java Backend Enthusiast',
    'System & BPMN Analyst'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 110;

  // Respect prefers-reduced-motion for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    typingElement.textContent = roles[0];
    return;
  }

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause when full word is displayed
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 450; // Pause before typing the next word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Initial delay so typing starts naturally
  typingElement.textContent = '';
  setTimeout(typeEffect, 400);
});
