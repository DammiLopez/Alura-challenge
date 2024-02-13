
function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copyText() {
    let resultText = document.getElementById("result").textContent;
    let textArea = document.createElement("textarea");
    textArea.value = resultText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Texto copiado al portapapeles.");
}

function validateInput(text) {
    let regex = /^[a-z\s]+$/;
    if (!regex.test(text)) {
        document.getElementById("validationMessage").style.display = "block";
        return false;
    }
    document.getElementById("validationMessage").style.display = "none";

    return true;
}

function processText(action) {
    let inputText = document.getElementById("inputText").value;
    let rightContainer = document.getElementById("right-container");
    let leftContainer = document.getElementById("left-container");
    let resultElement = document.getElementById("result");
    let resultImage = document.getElementById("result-image");
    let copyButton = document.getElementById("copyButton");
    let tituloResultado = document.getElementById("titulo-resultado");
    let descripcionResultado = document.getElementById("descripcion-resultado");

    // Validar el formato del texto
    if (!validateInput(inputText)) {
        leftContainer.style.paddingBottom = "174px"
        return;
    }

    if (action === "encrypt") {
        let encryptedText = encryptText(inputText);
        resultElement.textContent = encryptedText;
    } else if (action === "decrypt") {
        let decryptedText = decryptText(inputText);
        resultElement.textContent = decryptedText;
    }

    // Mostrar la imagen en el resultado y el botón de copiar
    leftContainer.style.paddingBottom = "10%"
    resultImage.style.display = "none";
    rightContainer.style.justifyContent = "space-between";
    rightContainer.style.padding = "0px 0px 50px 0px";
    tituloResultado.style.display = "none";
    descripcionResultado.style.display = "none";
    copyButton.style.display = "block";
}



function copyText() {
    let resultText = document.getElementById("result").textContent;
    let textArea = document.createElement("textarea");
    textArea.value = resultText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Mostrar el mensaje de éxito debajo del botón "Copiar"
    let copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function () {
        copyMessage.style.display = "none";
    }, 3000);
}

//configuracion para el manejo de la ventana modal

// Ventana modal
let modal = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton = document.getElementById("abrirModal");

let cerrarModalBtn = document.getElementById("cerrarModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", function () {
    modal.style.display = "block";
    boton.style.display = "none";
    cerrarModalBtn.style.display = "block"
});

cerrarModalBtn.addEventListener("click", function () {
    cerrarModalBtn.style.display = "none"; // Oculta el botón cerrarModal
    boton.style.display = "block"; // Muestra el botón abrirModal
    // ventanaModal.style.display = "none";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

//dark-mode
function toggleDarkMode() {
    // Obtenemos el body
    let body = document.body;
    let textArea = document.getElementById("inputText");
    let rightContainer = document.getElementById("right-container");

    rightContainer.classList.toggle("dark-result");
    // Toggle de una clase para cambiar al modo oscuro
    body.classList.toggle("dark-mode");
    textArea.classList.toggle("dark-input-text");



    // Toggle de los íconos de sol y luna
    let sunIcon = document.getElementById("sunIcon");
    let moonIcon = document.getElementById("moonIcon");

    sunIcon.style.display = (sunIcon.style.display === "none") ? "inline" : "none";
    moonIcon.style.display = (moonIcon.style.display === "none") ? "inline" : "none";

    // Podemos almacenar el estado del modo oscuro en localStorage
    let isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Verificamos si el usuario ya había seleccionado el modo oscuro anteriormente
let isDarkMode = localStorage.getItem("darkMode");
let rightContainer = document.getElementById("right-container");
if (isDarkMode === "true") {
    // Si el usuario había seleccionado el modo oscuro, lo aplicamos al cargar la página
    document.body.classList.add("dark-mode");
    rightContainer.classList.toggle("dark-result");

    // Cambiamos los íconos a luna (modo oscuro)
    let sunIcon = document.getElementById("sunIcon");
    let moonIcon = document.getElementById("moonIcon");

    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";

}

toggleDarkMode();
toggleDarkMode();