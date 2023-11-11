document.getElementById('about-us-toggle').addEventListener('click', function() {
    var description = document.getElementById('about-us-description');
    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
});