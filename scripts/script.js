const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    ocultarTextos();
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "ims"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    let textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    ocultarTextos();
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "ims"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value)
}

function ocultarTextos() {
    let textos1 = document.querySelectorAll('.texto1');
    let textos2 = document.querySelectorAll('.texto2');
    
    textos1.forEach(texto => {
        texto.style.display = 'none';
    });
    
    textos2.forEach(texto => {
        texto.style.display = 'none';
    });
}
