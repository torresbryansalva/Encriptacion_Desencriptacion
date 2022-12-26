
const encriptar = () =>{
    const texto=document.getElementById('input-area').value;
    const textoEncriptado = texto.replaceAll('i','imes').replaceAll('e','enter').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat')

    document.getElementById('mostrar').innerHTML = textoEncriptado;
    document.getElementById('mostrar').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.getElementById('logo').style.display = "none";
    document.getElementById('h2').style.display = "none";
    document.getElementById('derecho-p').style.display = "none";
}

const desencriptar = ()=>{
    const mostrar=document.getElementById('input-area').value;
    const textoDesencriptado = mostrar.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u')

    document.getElementById('mostrar').innerHTML=textoDesencriptado;
    document.getElementById('mostrar').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.getElementById('logo').style.display = "none";
    document.getElementById('h2').style.display = "none";
    document.getElementById('derecho-p').style.display = "none";

}

const copiar = () =>{
    const textocopiado = document.getElementById('mostrar').textContent;
    navigator.clipboard.writeText(textocopiado);
  }