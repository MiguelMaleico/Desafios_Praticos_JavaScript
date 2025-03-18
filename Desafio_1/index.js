function somarArray(array) {
    if (!Array.isArray(array)) {
        return "Valor invalido, insira apenas números";
    }

    let soma = 0;
    for (let num1 = 0; num1 < array.length; num1++) {
        if (typeof array[num1] !== "number") {
            return "Valor invalido, insira apenas números";
        }
        soma = soma + array[num1];
    }

    return soma;
}

function botaoSoma() {
    let input = document.getElementById("arrayInput").value;
    let array = input.split(",");

    let numeros = [];
    for (let num1 = 0; num1 < array.length; num1++) {
        let num = parseFloat(array[num1].trim());
        if (isNaN(num)) {
            document.getElementById("resultado").innerText = "Valor invalido, insira apenas números";
            return;
        }
        numeros.push(num);
    }

    let resultado = somarArray(numeros);
    document.getElementById("resultado").innerText = resultado;
}
