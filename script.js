document.getElementById('disclaimer-link').addEventListener('click', function(event) {
    event.preventDefault();
    var popup = document.getElementById('disclaimer-popup');
    if (popup.style.display === 'none') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});