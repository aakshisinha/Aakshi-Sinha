// Font loading detection
document.fonts.ready.then(() => {
  document.documentElement.classList.add('fonts-loaded');
});

// Fallback in case fonts never load (shows content after 3 seconds max)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.add('fonts-loaded');
  }, 3000);
});

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Only run if we're on the projects page
  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
