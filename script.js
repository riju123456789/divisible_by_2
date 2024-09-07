document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-message').innerText = 'Thank you for your message, ' + name + '! We will get back to you soon.';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').innerText = 'Please fill out all fields.';
    }
});
