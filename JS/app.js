function simulateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password.length >= 8) {

        document.getElementById("message").innerHTML = "Inicio de sesión exitoso para el usuario: " + username;

        localStorage.setItem("username", username);

        setTimeout(function () {
            window.location.href = "ejercicios.html";
        }, 1000);
    } else {
        document.getElementById("message").innerHTML = "La contraseña debe tener 8 o más caracteres.";
    }
}

window.onload = function () {
    var savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
};


const musculos = [
    {
        nombre: "Pecho",
        ejercicos: "Pres banca plano con barra, Pres banca inclinado con mancuernas, Cruce de poleas, Apertura en maquina",
        frecuencia: 1,
    },
    {
        nombre: "Espalda",
        ejercicos: "Remo con barra, Pull hover ,  Jalon al pecho, Remoa una mano con mancuerna",
        frecuencia: 1,
    },

    {
        nombre: "Hombro",
        ejercicos: "Pres militar con mancuernas, Elevaciones laterales en polea, Frontales con barra, Elevaciones laterales sentado con mancuernas",
        frecuencia: 1,
    },
    {
        nombre: "Piernas",
        ejercicos: "Sentadilla, Peso muerto rumano, Prensa, Extension de cuadriceps",
        frecuencia: 1,
    },
    {
        nombre: "Biceps",
        ejercicos: "Curl martillo,  Curl de biceps en barra W,  Curl de biceps reclinaodo en banco",
        frecuencia: 2,
    },
    {
        nombre: "Triceps",
        ejercicos: "Extension de triceps en polea con barra,  Extension de triceps en polea a una mano, Extension de triceps en polea con soga",
        frecuencia: 2,
    }
];


function buscarMusculo() {
    const nombreMusculo = document.getElementById("musculo").value;
    const nombreSpan = document.getElementById("nombreMusculo");
    const ejerciciosSpan = document.getElementById("ejerciciosMusculo");
    const frecuenciaSpan = document.getElementById("frecuenciaMusculo");
    const mensajeError = document.getElementById("mensaje");

    const musculoEncontrado = musculos.find(
        (musculo) => musculo.nombre.toLowerCase() === nombreMusculo.toLowerCase()
    );

    if (musculoEncontrado) {
        nombreSpan.textContent = musculoEncontrado.nombre;
        ejerciciosSpan.textContent = musculoEncontrado.ejercicos;
        frecuenciaSpan.textContent = musculoEncontrado.frecuencia;
        mensajeError.textContent = "";
    } else {
        mensajeError.textContent = "Por favor seleccione un músculo.";

        nombreSpan.textContent = "";
        ejerciciosSpan.textContent = "";
        frecuenciaSpan.textContent = "";
    }
}



function cargarDatosDesdeJSON() {

    fetch('tu_archivo.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombreNuevoMusculo').value = data.nombre;
            document.getElementById('frecuenciaNuevoMusculo').value = data.frecuencia;
            document.getElementById('tipoEntrenamientoNuevoMusculo').value = data.ejercicios;
        })
        .catch(error => console.error('Error al cargar datos desde el JSON: ', error));
}


function insertarMusculoPersonalizado() {
    const nombre = document.getElementById('nombreNuevoMusculo').value;
    const frecuencia = document.getElementById('frecuenciaNuevoMusculo').value;
    const ejercicios = document.getElementById('tipoEntrenamientoNuevoMusculo').value;


    const musculoPersonalizado = {
        nombre: nombre,
        frecuencia: frecuencia,
        ejercicios: ejercicios
    };


    const musculoPersonalizadoJSON = JSON.stringify(musculoPersonalizado);


    localStorage.setItem('musculoPersonalizado', musculoPersonalizadoJSON);


    const mensajeInsercion = document.getElementById('mensajeInserción');
    mensajeInsercion.textContent = `Músculo '${nombre}' insertado con éxito.`;
}


cargarDatosDesdeJSON();