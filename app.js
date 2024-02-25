//Variables
let mensajeEncriptado ="";
let mensajeDesencriptado ="";

function encriptarVocales(texto){
    return texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
}

function desencriptarVocales(texto){
    return texto
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
}

function encriptar(){
    let mensajeEncriptado ="";
    let mensaje = document.getElementById('mensaje').value;
    mensajeEncriptado = encriptarVocales(mensaje);
    console.log(mensajeEncriptado);
    document.getElementById('mensaje').value ="";
    document.getElementById('btncopiar').style.display='block';
    document.getElementById('sinmensaje').style.display='none';
    document.getElementById('mensajeEncriptado').style.display='block';
    document.getElementById('encriptado').value=mensajeEncriptado;
    return mensajeEncriptado;
}



function desencriptar(){
    let mensajeDesencriptado ="";
    let mensaje = document.getElementById('mensaje').value;
    mensajeDesencriptado = desencriptarVocales(mensaje)
    console.log(mensajeDesencriptado);
    document.getElementById('mensaje').value ="";
    document.getElementById('btncopiar').style.display='block';
    document.getElementById('sinmensaje').style.display='none';
    document.getElementById('encriptado').value=mensajeDesencriptado;
    return mensajeDesencriptado

}

function copiar (){
    var text = document.getElementById('encriptado').value;
    var temptext = document.createElement('textarea');
    temptext.value = text;
    document.body.appendChild(temptext);
    temptext.select();
    document.execCommand('copy');
    document.body.removeChild(temptext);

}