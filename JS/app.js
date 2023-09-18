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

//-----------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const selectMusculos = document.getElementById("musculos");
    const resultado = document.getElementById("resultado");

    selectMusculos.addEventListener("change", function () {
        const musculo = selectMusculos.value;
        cargarMusculoDesdeJSON(musculo);
    });

    function cargarMusculoDesdeJSON(musculo) {
        fetch("./JSON/musculos.json")
            .then((response) => response.json())
            .then((data) => {
                const musculoEncontrado = data.find(
                    (item) => item.nombre === musculo
                );

                if (musculoEncontrado) {
                    mostrarMusculo(musculoEncontrado);
                }
            })

    }

    function mostrarMusculo(musculo) {
        resultado.innerHTML = `
       <P> Musculo seleccionado: ${musculo.nombre} </P>
            <p>Ejercicios: ${musculo.ejercicos}</p>
            <p>Frecuencia: ${musculo.frecuencia}</p>
        `;
    }
});

//--------------------------------------------------------------------------------------------------------------------


