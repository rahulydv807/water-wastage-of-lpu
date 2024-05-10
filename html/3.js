document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        // Here you can handle form submission, e.g., send data to a server
        console.log('Form submitted with data:', Object.fromEntries(formData));
        form.reset(); // Reset the form after submission
    });
});
