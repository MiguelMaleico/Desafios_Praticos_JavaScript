function escolhaComputador() {
    let opcoes = ["pedra", "papel", "tesoura"];
    let num1 = Math.floor(Math.random() * 3);
    return opcoes[num1];
}


function jogar(){
    let escolhaUsuario = document.getElementById("escolha").value.toLowerCase();
    let escolhaCpu = escolhaComputador();

    if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura"){
        document.getElementById("resultado").innerText = "Escolha inválida, tente novamente";
        return;
    }
    let resultado = "";

    if (escolhaUsuario === escolhaCpu){
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaCpu === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaCpu === "papel") ||
        (escolhaUsuario === "papel" && escolhaCpu === "pedra")
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }



    
    document.getElementById("resultado").innerText = "Computador escolheu " + escolhaCpu + ". " + resultado;
}
