function verificarPalindromo(texto){
    if (typeof texto !== "string"){
        return "Valor inválido, insira um apenas letras";
    }

    let minusculo = texto.toLowerCase();
    let semEspaco = "";

    for (let num1 = 0; num1 < minusculo.length; num1++){
        if (minusculo[num1] !== " ") {
            semEspaco = semEspaco + minusculo[num1];
        }
    }

    let invertido = "";
    for (let num1 = semEspaco.length - 1; num1 >= 0; num1--){
        invertido = invertido + semEspaco[num1];
    }

    return semEspaco === invertido;
}

function botaoVerificar(){
    let input = document.getElementById("textoInput").value;
    let resultado = verificarPalindromo(input);
    document.getElementById("resultado").innerText = resultado;
}
