var form = document.getElementById('formularie');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validar

    var name = document.getElementById('name').value; // Obtener el valor del campo nombre
    var email = document.getElementById('email').value; // Obtener el valor del campo email
    var phone = document.getElementById('phone').value; // Obtener el valor del campo phone

    var errorMessage = '';
    var errorMessageEmail = '';
    var errorMessagePhone = '';


    // Validación del campo nombre
    
    if (name.trim() === '') {
        errorMessage = 'El campo Nombre no debe estar vacío.';
    } else if (name.length > 50) {
        errorMessage = 'El campo Nombre debe contener máximo 50 caracteres.';
    }
    
    // Validación del campo email
   
        if (email.trim() === '') {
            errorMessageEmail = '\nEl campo de correo electrónico no puede estar vacío.';
        } else if (!validateEmail(email)) {
            errorMessageEmail = '\nEl formato del correo electrónico es inválido. Ejemplo válido: texto@texto.com';
        }
     // Validación del campo email
        if(phone.trim() === ''){
            errorMessagePhone = '\nEl campo de teléfono no puede estar vacío.';
        } else if(!validarNumeros(phone)){
            errorMessagePhone = '\nEl campo de telefono es invalido. Ejemplo valido: 123456789 ';
        }

    // Mostrar mensaje de error si lo hay
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
       
    } else if(errorMessagePhone){
        document.getElementById('error-message-phone').textContent = errorMessagePhone;
    }else if(errorMessageEmail) {
        document.getElementById('error-message-email').textContent = errorMessageEmail;
    } 
    else {
        // Si no hay errores, mostrar mensaje de éxito y enviar el formulario (o hacer cualquier otra cosa)
        alert('Formulario enviado con éxito!');
        form.submit(); // Envía el formulario
    }

});

// Función para validar el formato del correo electrónico

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// function para validar el formato del correo electronico

function validarNumeros(entrada) {
    // Utilizamos una expresión regular para verificar si la entrada contiene solo números
    return /^\d+$/.test(entrada);
}

// Function telephone

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=<438e57a9bf2bdc>', { headers: { 'Accept': 'application/json' }})
    .then((resp) => resp.json())
    .catch(() => {
        return {
        country: 'ca',
        };
    })
    .then((resp) => callback(resp.country));
    }

    const phoneInputField = document.querySelector("#phone");

    const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["ca", "co", "us", "br"],
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
