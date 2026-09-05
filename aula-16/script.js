// ========================================
// PRODUTOS
// ========================================

const produtos = [

    {
        id: 1,
        nome: "Smartphone",
        descricao: "Smartphone com alta tecnologia.",
        preco: 1299.90,
        imagem: "a05.jpg"
    },

    {
        id: 2,
        nome: "Camiseta",
        descricao: "Camiseta de algodão premium.",
        preco: 79.90,
        imagem: "camiseta.jpg"
    },

    {
        id: 3,
        nome: "Caneca da Turma",
        descricao: "Caneca personalizada da turma.",
        preco: 29.90,
        imagem: "caneca.jpg"
    }

];


// ========================================
// ELEMENTOS DO HTML
// ========================================

const listaProdutos =
    document.getElementById("listaProdutos");

const areaCarrinho =
    document.getElementById("areaCarrinho");

const elementoTotal =
    document.getElementById("elementoTotal");

const botaoFinalizar =
    document.getElementById("finalizarCompra");


// ========================================
// CARRINHO
// ========================================

let carrinho = [];


// ========================================
// MOSTRAR PRODUTOS
// ========================================

function renderizarProdutos() {

    listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {

        const card =
            document.createElement("article");

        card.classList.add("product-card");


        card.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <h3>
                ${produto.nome}
            </h3>

            <p>
                ${produto.descricao}
            </p>

            <p class="preco">
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button
                class="btn-adicionar"
                data-id="${produto.id}">

                Adicionar ao carrinho

            </button>

        `;


        listaProdutos.appendChild(card);

    });
}


// ========================================
// ADICIONAR AO CARRINHO
// ========================================

function adicionarAoCarrinho(id) {

    const produto =
        produtos.find(
            (produto) => produto.id === id
        );


    if (!produto) {

        return;
    }


    const itemExistente =
        carrinho.find(
            (item) => item.id === id
        );


    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({

            ...produto,

            quantidade: 1

        });

    }


    salvarCarrinho();

    renderizarCarrinho();
}


// ========================================
// REMOVER DO CARRINHO
// ========================================

function removerDoCarrinho(id) {

    carrinho =
        carrinho.filter(
            (item) => item.id !== id
        );


    salvarCarrinho();

    renderizarCarrinho();
}


// ========================================
// AUMENTAR QUANTIDADE
// ========================================

function aumentarQuantidade(id) {

    const item =
        carrinho.find(
            (item) => item.id === id
        );


    if (!item) {

        return;
    }


    item.quantidade++;


    salvarCarrinho();

    renderizarCarrinho();
}


// ========================================
// DIMINUIR QUANTIDADE
// ========================================

function diminuirQuantidade(id) {

    const item =
        carrinho.find(
            (item) => item.id === id
        );


    if (!item) {

        return;
    }


    item.quantidade--;


    if (item.quantidade <= 0) {

        removerDoCarrinho(id);

        return;
    }


    salvarCarrinho();

    renderizarCarrinho();
}


// ========================================
// MOSTRAR CARRINHO
// ========================================

function renderizarCarrinho() {

    areaCarrinho.innerHTML = "";


    if (carrinho.length === 0) {

        areaCarrinho.innerHTML = `

            <p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>

        `;


        calcularTotal();

        return;
    }


    carrinho.forEach((item) => {

        const linha =
            document.createElement("div");


        linha.classList.add("cart-item");


        const subtotal =
            item.preco *
            item.quantidade;


        linha.innerHTML = `

            <div>

                <strong>
                    ${item.nome}
                </strong>

                <p>
                    R$ ${item.preco.toFixed(2)}
                </p>

            </div>


            <div class="quantidade">

                <button
                    class="btn-quantidade btn-diminuir"
                    data-id="${item.id}">

                    -

                </button>


                <span>
                    ${item.quantidade}
                </span>


                <button
                    class="btn-quantidade btn-aumentar"
                    data-id="${item.id}">

                    +

                </button>

            </div>


            <div>

                <strong>
                    R$ ${subtotal.toFixed(2)}
                </strong>

            </div>


            <button
                class="btn-remover"
                data-id="${item.id}">

                Remover

            </button>

        `;


        areaCarrinho.appendChild(linha);

    });


    calcularTotal();
}


// ========================================
// CALCULAR TOTAL
// ========================================

function calcularTotal() {

    const total =
        carrinho.reduce(
            (soma, item) => {

                return soma +
                    item.preco *
                    item.quantidade;

            },
            0
        );


    elementoTotal.textContent =
        `Total: R$ ${total.toFixed(2)}`;
}


// ========================================
// SALVAR CARRINHO
// ========================================

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}


// ========================================
// CARREGAR CARRINHO
// ========================================

function carregarCarrinho() {

    const dados =
        localStorage.getItem("carrinho");


    if (!dados) {

        carrinho = [];

        return;
    }


    try {

        carrinho =
            JSON.parse(dados);

    } catch (erro) {

        carrinho = [];

        console.error(
            "Erro ao carregar carrinho:",
            erro
        );

    }
}


// ========================================
// FINALIZAR COMPRA
// ========================================

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio!"
        );

        return;
    }


    alert(
        "Compra realizada com sucesso!"
    );


    carrinho = [];


    salvarCarrinho();

    renderizarCarrinho();
}


// ========================================
// EVENTOS
// ========================================

document.addEventListener(
    "click",
    (event) => {


        // ADICIONAR

        if (
            event.target.classList
                .contains("btn-adicionar")
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            adicionarAoCarrinho(id);
        }


        // REMOVER

        if (
            event.target.classList
                .contains("btn-remover")
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            removerDoCarrinho(id);
        }


        // AUMENTAR

        if (
            event.target.classList
                .contains("btn-aumentar")
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            aumentarQuantidade(id);
        }


        // DIMINUIR

        if (
            event.target.classList
                .contains("btn-diminuir")
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            diminuirQuantidade(id);
        }

    }
);


// ========================================
// BOTÃO FINALIZAR
// ========================================

botaoFinalizar.addEventListener(
    "click",
    finalizarCompra
);


// ========================================
// INICIAR LOJA
// ========================================

carregarCarrinho();

renderizarProdutos();

renderizarCarrinho();
