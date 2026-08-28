// categoria de produtos
const produtos = [
    {
        id: 1,
        nome: "RX 7600 8GB",
        preco: 1829,
        categoria: "Hardware",
        imagem: "https://images.kabum.com.br/produtos/fotos/459144/placa-de-video-rx-7600-challenger-asrock-amd-radeon-8gb-gddr6-90-ga41zz-00uanf_1685551526_gg.jpg"
    },
    {
        id: 2,
        nome: "mouse attack shark x11",
        preco: 168.20,
        categoria: "perifericos",
        imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/883179/xlarge/Mouse-Gamer-Sem-Fio-Attack-Shark-X11-22000-Dpi-59g-Tri-mode-Com-Dock-Magn-tico-RGB-Branco_1770926713.png"
    },
    {
        id: 3,
        nome: "Teclado Gamer Mecânico Machenike K500-B68",
        preco: 169.99,
        categoria: "perifericos",
        imagem: "https://images.kabum.com.br/produtos/fotos/1006035/teclado-gamer-mecanico-machenike-k500-b68-rgb-hot-swap-switch-red-abnt2-cinza-jj02gd00k_1778849810_gg.jpg"
    },
    {
        id: 4,
        nome: "Gabinete Gamer BRX Xtreme Glacier, Mid Tower",
        preco: 179.99,
        categoria: "Hardware",
        imagem: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-brx-xtreme-glacier-mid-tower-vidro-temperado-com-3-fans-branco-r41w_259656.jpg"
    },
    {
        id: 5,
        nome: "Monitor Gamer Hq Ultra 24” Ips 200hz",
        preco: 638.10,
        categoria: "Hardware",
        imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/1002864/xlarge/Monitor-Gamer-Hq-Ultra-24-Ips-200hz-1ms-Full-Hd-Freesync-HDMI-Displayport-Frameless-Hq24ip200_1785870218.jpg"
    }
];

// Percorre TODOS os produtos
produtos.forEach(({ nome, preco }) => {
    console.log(`Produto: ${nome} - R$ ${preco}`);
});

// Função para filtrar por categoria
function filtrarPorCategoria(categoria) {
    return produtos.filter(
        produto => produto.categoria === categoria
    );
}

// Filtra apenas os periféricos
const perifericos = filtrarPorCategoria("perifericos");
const hardware = filtrarPorCategoria("Hardware");

console.log("Periféricos:");
console.log(perifericos);
console.log("Hardware:");
console.log(hardware);
// destructuring
const { nome, preco } = produtos[0];

console.log(`Produto: ${nome} - R$ ${preco}`);