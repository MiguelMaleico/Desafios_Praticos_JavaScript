function verificarPrimo(num){
    if (typeof num !== "number" || isNaN(num)){
        return "valor invalido, digite apenas números";
    }

    if (num < 2){
        return false;
    }

    for (let num1 = 2; num1 < num; num1++){
        if (num % num1 === 0){
            return false;
        }
    }
    return true;
}

function botaoVerificar(){
    let input = document.getElementById("numeroInput").value;
    let numero = Number(input.trim()); 

    if (isNaN(numero)){
        document.getElementById("resultado").innerText = "valor invalido, digite apenas números";
        return;
    }

    let resultado = verificarPrimo(numero);
    document.getElementById("resultado").innerText = resultado;
}
