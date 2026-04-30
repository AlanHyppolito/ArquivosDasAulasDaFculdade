
function adicionarNoFinal(lista, adicionar) {
    let a = lista.length;
    let listaNew = new Array(a);
    for(let i = 0; i < a; i++){
        listaNew[i] = lista[i];
    }
    listaNew[a] = adicionar;
    return listaNew;
}
function removerDoFinal(lista) {
    let a = lista.length;
    let listaNew = new Array(a-1);
    for(let i = 0; i < a - 1; i++){
        listaNew[i] = lista[i];
    }
    return listaNew;
}
function removerDoInicio(lista) {
    let a = lista.length;
    let listaNew = new Array(a-1);
    for(let i = 1; i < a; i++){
        listaNew[i] = lista[i];
    }
    return listaNew;
}
function adicionarNoInicio(lista, adicionar){
    let a = lista.length;
    let listaNew = new Array(a);
    listaNew[0] = adicionar;
    for(let i = 1; i < a; i++){
        listaNew[i] = lista[i];
    }
    return listaNew;
}
function alterarLista(lista, indice, quantidade, novoElemento){

}