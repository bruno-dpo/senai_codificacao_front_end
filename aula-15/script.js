const produtos = [
    { nome: "Caneta", preco: 2.5 },
    { nome: "Caderno", preco: 12 },
    { nome: "Mochila", preco: 89.9 },
];
const container = document.getElementById("lista-produtos");
function renderizarProdutos(lista) {
    container.innerHTML = ""; // limpa antes de renderizar de novo 
    lista.forEach((produto) => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - R$ ${produto.preco}`;
        container.appendChild(item);
    });
}
renderizarProdutos(produtos);
function renderizarProdutos(lista) {
    container.innerHTML = "";
    lista.forEach((produto) => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - R$ ${produto.preco}`;
        item.addEventListener("click", () => {
            item.classList.toggle("favorito");
        });
        container.appendChild(item);
    });
}
renderizarProdutos(produtos);
