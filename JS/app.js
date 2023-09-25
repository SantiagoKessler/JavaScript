
const inicio = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (password.length >= 8) {
        document.getElementById("message").innerHTML = `Inicio de sesión exitoso para el usuario: ${username}`;
        localStorage.setItem("username", username);

        setTimeout(() => {
            window.location.href = "inicio.html";
        }, 1000);
    } else {
        document.getElementById("message").innerHTML = "La contraseña debe tener 8 o más caracteres.";
    }
};

window.onload = () => {
    let savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
};


//-----------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const selectMusculos = document.getElementById("musculos");
    const resultado = document.getElementById("resultado");

    selectMusculos.addEventListener("change", async function () {
        const musculo = selectMusculos.value;
        try {
            const musculoEncontrado = await cargarMusculoDesdeJSON(musculo);

            if (musculoEncontrado) {
                mostrarMusculo(musculoEncontrado);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });

    async function cargarMusculoDesdeJSON(musculo) {
        try {
            const data = await fetchMusculosData();
            const musculoEncontrado = data.find((item) => item.nombre === musculo);

            return musculoEncontrado;
        } catch (error) {
            console.error("An error occurred while loading data:", error);
            throw error;
        }
    }

    async function fetchMusculosData() {
        const response = await fetch("./JSON/musculos.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    }

    function mostrarMusculo(musculo) {
        resultado.innerHTML = `
       <p class="claro"> Musculo seleccionado: ${musculo.nombre}. </p>
            <p class="claro">Ejercicios: ${musculo.ejercicos}.</p>
            <p class="claro">Frecuencia: ${musculo.frecuencia}.</p>
        `;
    }
});



//--------------------------------------------------------------------------------------------------------------------

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const finalizarCompraBtn = document.getElementById('finalizar-compra');


cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', agregarProducto);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    finalizarCompraBtn.addEventListener('click', finalizarCompra);
}
function agregarProducto(e) {
    e.preventDefault();
    const isAgregarCarrito = e.target.classList.contains('agregar-carrito');

    isAgregarCarrito && leerDatosElemento(e.target.parentElement.parentElement);

    isAgregarCarrito &&
        Swal.fire(
            'Agregado al carrito',
            'El producto se ha añadido al carrito con éxito.',
            'success'
        );
}



function leerDatosElemento(elemento) {

    const { imagen, titulo, precio, id } = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h4').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };

    insertarCarrito({ imagen, titulo, precio, id });
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">x</a>
        </td>`;
    lista.appendChild(row);
}


function eliminarElemento(e) {
    e.preventDefault();
    e.target.classList.contains('borrar') && e.target.closest('tr') && e.target.closest('tr').remove();
}


function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}




function finalizarCompra() {
    const carritoVacio = lista.children.length === 0;

    carritoVacio
        ? Swal.fire({
            title: 'Carrito vacío',
            text: 'Agrega productos al carrito antes de finalizar la compra.',
            icon: 'warning',
        })
        : (function () {
            vaciarCarrito();

            Swal.fire({
                title: 'Felicitaciones!',
                text: 'Estás a un paso de conseguirlo.',
                imageUrl: './imagenes/conquer.jpg',
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: 'Custom image',
            });
        })();


}







