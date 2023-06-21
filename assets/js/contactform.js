    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку відправки форми

    // Отримуємо значення полів форми
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Створюємо об'єкт з даними форми
    var formData = {
    name: name,
    email: email,
    message: message
};

    // Відправляємо дані форми за URL з методом POST
    fetch('https://api.byteplex.info/api/test/contact/', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
    body: JSON.stringify(formData)
})
    .then(function(response) {
    if (response.ok) {
    alert('Form submitted successfully');
} else {
    alert('An error occurred. Please try again.');
}
})
    .catch(function(error) {
    alert('An error occurred. Please try again.');
});
});

