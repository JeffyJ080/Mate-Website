function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function showSuccessMessage() {
    document.getElementById('success-message').style.display = 'block';
    return true;
}