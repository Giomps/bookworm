const nameRegister = document.querySelector('.nom')
const password = document.querySelector('.password')
const form = document.querySelector('.form')
const errorElement = document.querySelector('.error')

// Evite de soumettre le formulaire dès que les champs sont vides
form.addEventListener('submit', (e) => {
    let message = []
    if(nameRegister.value === '') {
        message.push('Vous devez écrire votre nom')
    }

    if(message.length > 0) {
        e.preventDefault()
        errorElement.textContent = message.join('. ')
    }
})


