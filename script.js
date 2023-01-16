
function encriptar() {

  // var texto_encriptar = document.querySelector("#texto-encriptar");
  // Llaves
  // var llaves = ["ai","enter","imes","ober","ufat"]
  // llaves.forEach(llave => console.log(llave[0]))
  // console.log(llaves[1][0])

  var textoEncriptado = "";
  var texto_encriptar = document.querySelector("#texto-encriptar").value
  var letrasAceptadas = ["ñ", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var a = "ai";
  var e = "enter";
  var i = "imes";
  var o = "ober";
  var u = "ufat";

  // for (var contador = 0; contador < texto_encriptar.length; contador++) {
  //   if (texto_encriptar[contador].toUpperCase() === texto_encriptar[contador] && texto_encriptar[contador] === ! " ") {
  //     alert("No se permiten letras mayúsculas o acentos")
  //     return false
  //   
  // }

  if (texto_encriptar.length == 0) {
    alert("No debe estar vacío")
    return 0
  }
  for (var contador = 0; contador < texto_encriptar.length; contador++) {
    var contador2 = 0
    var encontrado = false
    while (contador2 < letrasAceptadas.length) {
      if (texto_encriptar[contador] == letrasAceptadas[contador2]) {
        encontrado = true
      }
      contador2++;
    }
    if (!encontrado) {
      alert("Solamente minúsculas y sin acentos")
      return 0
    }
  }


  for (var contador = 0; contador < texto_encriptar.length; contador++) {
    if (texto_encriptar[contador] == "a") {
      textoEncriptado = textoEncriptado + a;
    } else if (texto_encriptar[contador] == "e") {
      textoEncriptado = textoEncriptado + e;
    } else if (texto_encriptar[contador] == "i") {
      textoEncriptado = textoEncriptado + i;
    } else if (texto_encriptar[contador] == "o") {
      textoEncriptado = textoEncriptado + o;
    } else if (texto_encriptar[contador] == "u") {
      textoEncriptado = textoEncriptado + u;
    } else {
      textoEncriptado = textoEncriptado + texto_encriptar[contador]
    }
  }

  // console.log(textoEncriptado)

  document.getElementById("imagen-mostrar").style.display = "none"
  document.getElementById("sec-mostrar").style.display = "block"
  document.querySelector("#mostar-texto").value = textoEncriptado
  document.querySelector("#texto-encriptar").value = "";

}

function desencriptar() {
  var ai = "a";
  var enter = "e";
  var imes = "i";
  var ober = "o";
  var ufat = "u";
  var textoDesencriptado = "";
  var texto_desencriptar = document.querySelector("#texto-encriptar").value

  if (texto_desencriptar.length == 0) {
    alert("No debe estar vacío")
    return 0
  }
  textoDesencriptado = texto_desencriptar.replaceAll("ai", ai);
  textoDesencriptado = textoDesencriptado.replaceAll("enter", enter);
  textoDesencriptado = textoDesencriptado.replaceAll("imes", imes);
  textoDesencriptado = textoDesencriptado.replaceAll("ober", ober);
  textoDesencriptado = textoDesencriptado.replaceAll("ufat", ufat);

  document.querySelector("#mostar-texto").value = textoDesencriptado
  document.getElementById("imagen-mostrar").style.display = "none"
  document.getElementById("sec-mostrar").style.display = "block"
  document.querySelector("#texto-encriptar").value = "";
  // console.log(textoDesencriptado)

}
function copiar_mensaje() {
  var copiarMensaje = document.querySelector("#mostar-texto");
  copiarMensaje.select();
  navigator.clipboard.writeText(copiarMensaje.value);
  console.log("Mensaje Copiado!");

}

var boton_encriptar = document.querySelector("#boton-encriptar")
boton_encriptar.onclick = encriptar;

var boton_desencriptar = document.querySelector("#boton-desencriptar")
boton_desencriptar.onclick = desencriptar;

var boton_copiar = document.querySelector("#boton-copiar")
boton_copiar.onclick = copiar_mensaje;

