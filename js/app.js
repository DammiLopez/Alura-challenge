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
