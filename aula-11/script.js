// 2. Criando os produtos

const produto1 = {
    nome: "Notebook",
    preco: 2500,
    categoria: "Eletrônicos",
    estoque: 10,
    emPromocao: true
};

const produto2 = {
    nome: "Mouse",
    preco: 80,
    categoria: "Acessórios",
    estoque: 25,
    emPromocao: false
};

const produto3 = {
    nome: "Teclado",
    preco: 150,
    categoria: "Acessórios",
    estoque: 15,
    emPromocao: true
};


// Lista com todos os produtos

const produtos = [produto1, produto2, produto3];


// 3. Função para calcular desconto

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);

    return preco - desconto;
}


// 4. Função para exibir produto usando template string

function exibirProduto(produto) {
    return `
        <article>
            <h3>${produto.nome}</h3>

            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>

            <p>Categoria: ${produto.categoria}</p>

            <p>Estoque: ${produto.estoque} unidades</p>

            <button onclick="calcularEExibirDesconto(${produto.preco}, '${produto.nome}')">
                Calcular desconto
            </button>

            <p id="resultado-${produto.nome}"></p>
        </article>
    `;
}


// Função para calcular e mostrar o desconto

function calcularEExibirDesconto(preco, nome) {

    const novoPreco = calcularDesconto(preco, 10);

    const resultado = document.getElementById(`resultado-${nome}`);

    resultado.textContent =
        `Preço com 10% de desconto: R$ ${novoPreco.toFixed(2)}`;
}


// 5. Verificando se os produtos estão em promoção

if (produto1.emPromocao) {
    console.log(`${produto1.nome} está em promoção!`);
} else {
    console.log(`${produto1.nome} não está em promoção.`);
}


// Mostrando os produtos no HTML

const listaProdutos = document.getElementById("lista-produtos");

for (let i = 0; i < produtos.length; i++) {

    listaProdutos.innerHTML += exibirProduto(produtos[i]);

}


// 6. FOR para listar todos os produtos no Console

for (let i = 0; i < produtos.length; i++) {

    console.log(`${i + 1}. ${exibirProduto(produtos[i])}`);

}