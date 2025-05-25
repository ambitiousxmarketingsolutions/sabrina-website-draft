
  const scrollElements = document.querySelectorAll('.fade-slide-in');

  const observerOptions = {
    threshold: 0.1,
  };

  const onScrollReveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // 👈 allows repeat animation
      }
    });
  }, observerOptions);

  scrollElements.forEach((el) => {
    el.classList.remove('show'); // 👈 resets class on page load
    onScrollReveal.observe(el);
  });


