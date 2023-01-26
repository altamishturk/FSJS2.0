const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart.indexOf("Meat") === -1){
    shoppingCart.unshift("Meat");
}
if(shoppingCart.indexOf("Sugar") === -1){
    shoppingCart.push("Sugar");
}

shoppingCart.splice(shoppingCart.indexOf("Honey"),1);

shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea");

console.log(shoppingCart);