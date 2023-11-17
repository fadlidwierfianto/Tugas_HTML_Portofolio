document.getElementById('about-me-toggle').addEventListener('click', function() {
    var description = document.getElementById('about-me-description');
    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
});