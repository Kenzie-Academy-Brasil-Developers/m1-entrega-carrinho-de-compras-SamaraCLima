const productsCart = [
    {
        id: 01,
        name: "Pirulitos",
        price: 2.99
    },
    
    {
        id: 02,
        name: "Pacote de Balas",
        price: 10.99
    },
    
    {
        id: 03,
        name: "Balas de Caramelo",
        price: 6.99
    },
    
    {
        id: 04,
        name: "Chiclete de Morango",
        price: 4.99
    },
    {
        id: 05,
        name: "Pacote de Jujubas",
        price: 19.99
    }
]

let body = document.body;
let main = document.createElement("main");
let loja = document.createElement("h1");
loja.innerText = "Loja de Doces";
let div = document.createElement("div");
let item = document.createElement("h2");
item.innerText = "Doces";
let valor = document.createElement("p");
valor.innerText = "Valor";
let ul = document.createElement("ul");
let section = document.createElement("section");
let total = document.createElement("p");
total.innerText = "Total";
let valorTotal = document.createElement("p");
let button = document.createElement("button");
button.innerText = "Finalizar Compra";

body.appendChild(main);
div.append(item, valor)
section.append(total, valorTotal)
main.append(loja, div, ul, section, button)

function listaDeProdutos(list){
    for(let i = 0; i < list.length; i++){
        let produtos = list[i];        
        carrinho = compras(produtos)
    }
}
listaDeProdutos(productsCart)
function compras(doces) {
    let li = document.createElement("li");
    let name = document.createElement("p");
    let price= document.createElement("span");
    name.innerHTML = doces.name;
    price.innerHTML = `R$ ${doces.price}`;
    ul.appendChild(li);
    li.append(name, price);
}
function totalDaCompra(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        let totalCompras = array[i];        
        let valor = totalCompras.price;
        result += valor;
    }
    return result
}
let valorDoces = totalDaCompra(productsCart)
valorTotal.innerText = `R$ ${valorDoces}`;