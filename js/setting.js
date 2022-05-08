
const vocales = { "a":"ai", "e":"enter",  "i":"imes","o":"ober","u":"ufat"};

function validarTexto (texto) {
    
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
    if(texto.match(mayusculas)){
        alert("No se permiten mayusculas");
        return true; 
    }else if(texto == vacio){
       alert("Ingrese un mensaje para codificar");
        return true;
   }else {
        return false;
    }
}


/*===METODO ENCRIPTAR===*/
let btnCodificar = document.querySelector("#btn-codificar");
btnCodificar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#mensaje").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Codificado = codificar(textoIngresado);
        let resultado = document.querySelector("#msj-codificado");
        resultado.value = Codificado;
    } else {        
        textInput = "";     
     
    }
               
})

function codificar (textoIngresado) {
    let Codificado = "";
    for (const obj in vocales) {
        Codificado = textoIngresado.replaceAll(obj,vocales[obj]);
        textoIngresado = Codificado;        
    }
    return (Codificado);
}

/*===METODO DESNCRIPTAR===*/
let btnDescodificar = document.querySelector("#btn-descodificar");
btnDescodificar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#mensaje").value;
    let Descodificar = descodificar(textoIngresado);

    let resultado = document.querySelector("#msj-codificado");
    resultado.value = Descodificar;
})

function descodificar (textoIngresado) {
    let Descodificado = "";
    for (const obj in vocales) {
        Descodificado = textoIngresado.replaceAll(vocales[obj],obj);
        textoIngresado = Descodificado;        
    }
    return (Descodificado);
}



/*===METODO COPIAR===*/
let btnCopiar = document.querySelector("#btn-copiar");
btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msj-codificado").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#mensaje").value="";

});




/*===FUNCION IMAGEN===*/

function cerrar(){
    img = document.getElementById('ilustracion');
    img.style.display = 'none'; 
}

function mostrar(){
    img = document.getElementById('ilustracion');
    img.style.display = '';
}








