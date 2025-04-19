// Show fallbacks when images fail to load
document.addEventListener('DOMContentLoaded', () => {
  // Listen for image errors
  document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
      const parent = e.target.closest('div');
      if (parent) {
        const fallback = parent.querySelector('.image-fallback');
        if (fallback) {
          fallback.classList.remove('hidden');
        }
      }
    }
  }, true);
}); 