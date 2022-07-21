
//////////////////////// EXERCICIO DH 

let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]
/////////////////////// exercicio 1

products.push({ name: 'HDMI', price: 50, quantity: 0, colors: [] })

for (let i = 0; i < products.length; i+= 1) {
  if (products[i].quantity === 0) {
    products.splice(i, 1)
  }
}
console.log(products.filter((product) => product.quantity === 0));

/////////////////////// exercicio 2

const removerStockout = () => {
    products = products.filter((item) => item.quantity > 0);
  };
  
  removerStockout();

/////////////////////// exercicio 3

const stock = products.reduce((acc, product) => {
  acc += product.quantity
  return acc
}, 0)

console.log(stock);

/////////////////////// exercicio 4

function maiorPrecoQue(products, price) {
  return products.filter((product) => product.price > price)
}

console.log(maiorPrecoQue(products, 100));

/////////////////////// exercicio 5

function pegarLetrinhaO(products, letter) {
  return products.filter((product) => product.name.includes(letter))
}

console.log(pegarLetrinhaO(products, 'o'));