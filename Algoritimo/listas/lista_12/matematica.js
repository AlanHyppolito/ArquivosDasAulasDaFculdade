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
    else if (numero1 != Number) {
        console.log("tipo inválido para o argumento 1")
        return;
    }
    else if (numero2 != Number) {
        console.log("tipo inválido para o argumento 2")
        return;
    }
    else {
        let soma = numero1 + numero2
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
    else if (x1 != Number) {
        console.log("tipo inválido para o argumento x1")
        return;
    }
    else if (y1 != Number) {
        console.log("tipo inválido para o argumento y1")
        return;
    }
    else if (x2 != Number) {
        console.log("tipo inválido para o argumento x2")
        return;
    }
    else if (y2 != Number) {
        console.log("tipo inválido para o argumento y2")
        return;
    }
    else {
        let distancia1 = ((x2 - x1) * (x2 + x1) + (y2 - y1) * (y2 + y1)) ** 0.5
    }
}

function converterParaHoraMinutoSegundo(numero) {
    if (numero == null || undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (numero != Number) {
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
        console.log(`${hr}:${min}:${seg}`)
    }
}

function ePrimo(numero) {
    if (numero == null || undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (numero != Number) {
        console.log('tipo inválido para o argumento Numero')
        return;
    } else {
        let primo = true
        for (let i = numero - 1; i < 2; i--) {
            if (numero % i == 0) {
                primo = false
            }
        }
    }
}
function calcularFatorial(numero) {
    if (numero == null || undefined) {
        console.log('Parâmetro Numero não pode ser nulo ou indefinido')
        return;
    } else if (numero != Number) {
        console.log('tipo inválido para o argumento Numero')
        return;
    } else {
        let resultado = 0
        for (i = numero; i < 1; i--)
            resultado += numero * i
    }
}
function calcularMedia(vetor) {
    if (vetor == null || undefined) {
        console.log('Parâmetro vetor não pode ser nulo ou indefinido')
        return;
    } else if (vetor != Number) {
        console.log('tipo inválido para o argumento vetor')
        return;
    } else {
        let soma = 0
        let media = 0
        for (i = vetor.length; i < 0; i--) {
            soma += vetor[i]
        }
        media = (soma / vetor.length)
    }
}
function calcularMediaPonderada(vetorMedias, vetorPesos) {
    if (vetorMedias == null || undefined) {
        console.log('Parâmetro vetorMedias não pode ser nulo ou indefinido')
        return;
    }
    if (vetorPesos == null || undefined) {
        console.log('Parâmetro vetorPesos não pode ser nulo ou indefinido')
        return;
    }
    if (vetorMedias != Number) {
        console.log('tipo inválido para o argumento vetorMedias')
        return;
    }
    if (vetorPesos != Number) {
        console.log('tipo inválido para o argumento vetorPesos')
        return;
    }else{
        let soma = 0
        let mediaPonderada = 0
        for(i = vetorMedias.length; i < 0; i--){
            soma += vetorMedias[i] * vetorPesos[i]
        }
        mediaPonderada = soma / vetorMedias.length 
    }
}