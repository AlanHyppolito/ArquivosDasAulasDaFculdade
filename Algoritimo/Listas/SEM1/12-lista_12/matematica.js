function somar(numero1, numero2) {
    //if((numero1 && numero2) == (null || undefined))
    if (numero1 == null || undefined) {
        console.log("Parâmetro 1 não pode ser nulo ou indefinido")
        return;
    }
    else if (numero2 == null || undefined) {
        console.log("Parâmetro 1 não pode ser nulo ou indefinido")
        return;
    }
    else if (typeof numero1 != "number") {
        console.log(typeof numero1);
        console.log("tipo inválido para o argumento 1")
        return;
    }
    else if (typeof numero2 != "number") {
        console.log("tipo inválido para o argumento 2")
        return;
    }
    else {
        let soma = numero1 + numero2
        return soma;
    }
}
function calcularDistancia(x1, y1, x2, y2) {
    if (x1 == null || undefined) {
        console.log("Parâmetro x1 não pode ser nulo ou indefinido")
        return;
    }
    else if (y1 == null || undefined) {
        console.log("Parâmetro y1 não pode ser nulo ou indefinido")
        return;
    }
    else if (x2 == null || undefined) {
        console.log("Parâmetro x2 não pode ser nulo ou indefinido")
        return;
    }
    else if (y2 == null || undefined) {
        console.log("Parâmetro y2 não pode ser nulo ou indefinido")
        return;
    }
    else if (typeof x1 != "number") {
        console.log("tipo inválido para o argumento x1")
        return;
    }
    else if (typeof y1 != "number") {
        console.log("tipo inválido para o argumento y1")
        return;
    }
    else if (typeof x2 != "number") {
        console.log("tipo inválido para o argumento x2")
        return;
    }
    else if (typeof y2 != "number") {
        console.log("tipo inválido para o argumento y2")
        return;
    }
    else {
        let distancia = ((x2 - x1) * (x2 + x1) + (y2 - y1) * (y2 + y1)) ** 0.5
    }
}

function converterParaHoraMinutoSegundo(numero) {
    if (numero == null || undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (typeof numero != "number") {
        console.log('tipo inválido para o argumento Numero')
        return;
    } else {
        let seg = 0
        let min = 0
        let hr = 0
        for (i = numero; i > 0; i--) {
            seg++
            if (seg == 60) {
                seg = 0
                min++
            }
            if (min == 60) {
                min = 0
                hr++
            }
        }
        let convercao = `${hr}:${min}:${seg}`
        return convercao;
    }
}

function ePrimo(numero) {
    if (numero == null || undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (typeof numero != "number") {
        console.log('tipo inválido para o argumento Numero')
        return;
    } else {
        let primo = true
        for (let i = numero - 1; i >= 2; i--) {
            if (numero % i == 0) {
                primo = false
            }
        }
        return primo;
    }
}
function calcularFatorial(numero) {
    if (numero == null || numero == undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (typeof numero != "number") {
        console.log('tipo inválido para o argumento Numero')
        return;
    } else {
        let resultado = 1
        for (i = numero; i > 0; i--) {
            resultado *= i
        }
        return resultado;
    }
}
function calcularMedia(vetor) {
    if (vetor == null || vetor == undefined) {
        console.log('Parâmetro vetor não pode ser nulo ou indefinido')
        return;
    }
    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] != "number") {
            console.log('tipo inválido para o argumento vetor')
            return;
        }
    }
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    let media = (soma / vetor.length)
    return media;
}
function calcularMediaPonderada(vetorMedias, vetorPesos) {
    if (vetorMedias == null || vetorMedias == undefined) {
        console.log('Parâmetro vetorMedias não pode ser nulo ou indefinido')
        return;
    }
    if (vetorPesos == null || vetorPesos == undefined) {
        console.log('Parâmetro vetorPesos não pode ser nulo ou indefinido')
        return;
    }
    for (let i = 0; i < vetorMedias.length; i++) {
        if (typeof vetorMedias[i] != "number") {
            console.log('tipo inválido para o argumento vetor')
            return;
        }
    }
    for (let i = 0; i < vetorPesos.length; i++) {
        if (typeof vetorPesos[i] != "number") {
            console.log('tipo inválido para o argumento vetor')
            return;
        }
    }
    let somaPeso = 0
    let soma = 0
    let mediaPonderada = 0
    for (i = 0; i < vetorPesos.length; i++) {
        somaPeso += vetorPesos[i]
    }
    for (i = 0; i < vetorMedias.length; i++) {
        soma += vetorMedias[i] * vetorPesos[i]
    }
    mediaPonderada = soma / somaPeso
    return mediaPonderada;
}