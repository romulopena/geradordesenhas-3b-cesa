const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    //condição para não mostrar números menor do que zero
    if (tamanhoSenha > 1) { //se o tamanho da senha for maior do que 1
        tamanhoSenha--; //tamanho da senha dimunui 1 unidade
    }
    numeroSenha.textContent = tamanhoSenha; //muda o numero conforme o botao clicado
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();
campoSenha.value = letrasMaiusculas;

function geraSenha() {
    let senha = ' ' ;
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}