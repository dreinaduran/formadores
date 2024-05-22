const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//Iterando sobre a lista de botões
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

//document.querySelector("#minhaDiv p").textContent = "Olá chuva, venha +- com força";
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-10T00:00:00");
const tempoObjetivo2 = new Date("2024-09-31T00:00:00");
const tempoObjetivo3 = new Date("2024-07-25T00:00:00");
const tempoObjetivo4 = new Date("2024-12-13T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();// Retorna a data atual do computador
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return "Prazo finalizado."
    }
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    let contador = `<div class="contador-digito">
                     <p class="contador-digito-numero">${dias}</p>
                     <p class="contador-digito-texto">dias</p>
                    </div>
                    <div class="contador-digito">
                     <p class="contador-digito-numero">${horas}</p>
                     <p class="contador-digito-texto">horas</p>
                    </div>
                    <div class="contador-digito">
                     <p class="contador-digito-numero">${minutos}</p>
                     <p class="contador-digito-texto">minutos</p>
                    </div>
                    <div class="contador-digito">
                     <p class="contador-digito-numero">${segundos}</p>
                     <p class="contador-digito-texto">segundos</p>
                    </div>`
    return contador;

}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].innerHTML = calculaTempo(tempos[i]);
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();