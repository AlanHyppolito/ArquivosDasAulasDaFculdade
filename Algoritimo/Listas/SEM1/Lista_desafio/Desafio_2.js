function contemElemento(lista, element) {
    let a = lista.length;
    let listaNew = new Array(a);
    let comtem = false;
    for (let i = 0; i < a; i++) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return comtem;
    }
}
function buscarPrimeiraPosicao(lista, element) {
    let a = lista.length;
    let listaNew = new Array(a);
    let comtem = false;
    for (let i = 0; i < a; i++) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return i;
    }
}
function buscarUltimaPosica(lista, element) {
    let a = lista.length;
    let listaNew = new Array(a);
    let comtem = false;
    for (let i = a; i < 0; i--) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return i;
    }
}
function concatenar(listaA, listaB) {
    let a = listaA.length
    let b = listaB.length
    let listaNew = new Array((a + b) - 1)
    for (let i = 0; i < a; i++) {
        listaNew[i] = listaA[i]
    }
    let l = 0
    for (let o = i; o < ((a + b) - 1); o++) {
        listaNew[o] = listaB[l]
        l++
    }
    return listaNew;
}
function comparar(listaA, listaB) {
    let a = listaA.length
    let b = listaB.length
    let igual = true
    if (a != b) {
        igual = false
        return igual;
    }
    for (let i = 0; i < a; i++) {
        if (listaA[i] != listaB[i]) {
            igual = false
            break
        }
    }
    return igual;
}