
function fichaAluno() {
    let aluno = {
        "nome": "Ana Silva",
        "ra": 1234567,
        "curso": "Ciência da Computação",
        "semestre": 1
    }
    div_aluno.innerHTML = `Nome: ${aluno.nome}<br>
RA: ${aluno.ra}<br>
Curso: ${aluno.curso}<br>
Semestre: ${aluno.semestre}`
}

//////////////////////////////////////////////////////
function produtoCarrinho() {
    let produto = {
        "nome": "Caderno",
        "preco": 15,
        "quantidade": 3
    }
    return `Produto: ${produto.nome} 
    | Preço: R$${produto.preco} 
    | Quantidade: ${produto.quantidade} 
    | Total: R$ ${(produto.nome * produto.preco)}`
}

function objetoAlinhado() {
    let cliente = {
        "nome": "Lucas Silva",
        "idade": 24,
        "endereco": {
            "rua": "Avenida Paulista",
            "numero": 1000,
            "cidade": "São Paulo"
        }
    }
    return `Nome : ${cliente.nome}
    Idade: ${cliente.idade}
    Endereço: 
    Rua: ${cliente.endereco.rua}
    Numero: ${cliente.endereco.numero}
    Cidade: ${cliente.endereco.cidade}
    `
}

function atulizandoPropriedadeDep(valor) {
    let conta = {
        "titular": "Mariana Souza",
        "saldo": 1550.75,
        "banco": "Banco Central do Brasil"
    }

    return `Titular: ${conta.titular} 
    Saldo: ${conta.saldo + valor} 
    Banco: ${conta.banco}`
}

function atulizandoPropriedadeSacar(valor) {
    let conta = {
        "titular": "Mariana Souza",
        "saldo": 1550.75,
        "banco": "Banco Central do Brasil"
    }
    return `Titular: ${conta.titular} 
    Saldo: ${conta.saldo - valor} 
    Banco: ${conta.banco}`
}

function listaContatos() {
    let contatos = [cantato1, contato2, contato3, contato4]
    div_contatos.innerHTML = ``
    let contato1 = {
        "nome": "Ana Oliveira",
        "telefone": "(11) 98765-4321"
    };

    let contato2 = {
        "nome": "Bruno Costa",
        "telefone": "(21) 91234-5678"
    };

    let contato3 = {
        "nome": "Carla Mendes",
        "telefone": "(31) 99887-7665"
    };

    let contato4 = {
        "nome": "Diego Santos",
        "telefone": "(47) 98822-1100"
    };
    for (let i = 0; i < contatos.length; i++) {
        div_contatos.innerHTML += `Nome: ${contatos[i].nome} Telefone: ${contatos[i].telefone} `
    }
}

function mediaTurma() {

    let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5]

    let aluno1 = {
        "nome": "Alice Moreira",
        "nota": 8.5
    };

    let aluno2 = {
        "nome": "Gabriel Lima",
        "nota": 7.0
    };

    let aluno3 = {
        "nome": "Beatriz Rocha",
        "nota": 9.2
    };

    let aluno4 = {
        "nome": "Tiago Ferreira",
        "nota": 6.8
    };

    let aluno5 = {
        "nome": "Helena Souza",
        "nota": 10.0
    };

    let notas = 0

    for (let i = 0; i < alunos.length; i++) {
        notas += alunos[i].nota
    }

}

function filtroProdutos(tipo) {

    let produtos = [produto1, produto2, produto3, produto4, produto5, produto6]

    let produto1 = {
        "nome": "Monitor 24 Polegadas",
        "categoria": "Eletrônicos",
        "preco": 850.00
    };

    let produto2 = {
        "nome": "Teclado Mecânico",
        "categoria": "Eletrônicos",
        "preco": 250.00
    };

    let produto3 = {
        "nome": "Pacote de Café 500g",
        "categoria": "Alimentos",
        "preco": 22.90
    };

    let produto4 = {
        "nome": "Caixa de Leite",
        "categoria": "Alimentos",
        "preco": 5.50
    };

    let produto5 = {
        "nome": "Caderno Universitário",
        "categoria": "Escritório",
        "preco": 35.00
    };

    let produto6 = {
        "nome": "Kit de Canetas",
        "categoria": "Escritório",
        "preco": 15.00
    };
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].categoria == tipo) {
            div_produto.innerHTML = `Nome: ${produtos[i].nome} Categoria: ${produtos[i].categoria} Preço: ${produtos[i].preco}`
        }
        continue
    }
}

function cardapioRestaurante() {
    let pratos = [prato1, prato2, prato3, prato4, prato5]

    let prato1 = {
        "nome": "Bruschetta de Tomate",
        "tipo": "entrada",
        "preco": 25.00
    };

    let prato2 = {
        "nome": "Risoto de Alho Poró",
        "tipo": "principal",
        "preco": 58.90
    };

    let prato3 = {
        "nome": "Petit Gâteau com Sorvete",
        "tipo": "sobremesa",
        "preco": 32.00
    };

    let prato4 = {
        "nome": "Salada Caesar",
        "tipo": "entrada",
        "preco": 28.50
    };

    let prato5 = {
        "nome": "Filé Mignon ao Molho Madeira",
        "tipo": "principal",
        "preco": 74.00
    };
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].tipo == "entrada") {
            div_produto.innerHTML = `Nome: ${pratos[i].nome} Categoria: ${pratos[i].tipo} Preço: ${pratos[i].preco}`
        }
        if (produtos[i].tipo == "principal") {
            div_produto.innerHTML = `Nome: ${pratos[i].nome} Categoria: ${pratos[i].tipo} Preço: ${pratos[i].preco}`
        }
        if (produtos[i].tipo == "sobremesa") {
            div_produto.innerHTML = `Nome: ${pratos[i].nome} Categoria: ${pratos[i].tipo} Preço: ${pratos[i].preco}`
        }
    }
}