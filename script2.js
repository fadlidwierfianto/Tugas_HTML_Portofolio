function toggleContent(className) {
    const content = document.querySelector(`.${className}`);
    content.classList.toggle('show');
  }