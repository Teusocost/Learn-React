// trabalhando com interfaces
function DescribleVehicle(Vehicle) {
    console.log(`This ${Vehicle.year} ${Vehicle.make} ${Vehicle.model} is a great choice.`);
}
const mycar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
};
DescribleVehicle(mycar);
// Exercicio 2 
// Crie uma funcao generica firstElement que retorne o primeiro item de um array.
// A funcao deve ser capaz de trabalhar com qualquer tipo de dado
function firstElement(arr) {
    console.log(arr[0]);
}
firstElement([2, 1, 3]);
function freezeProduct(Product) {
    return Product;
}
const bread = {
    id: 1,
    name: 'Bread',
    price: 10,
};
const frozenBread = freezeProduct(bread);
function uptadeProductPrice(Product, newPrice) {
    return Object.assign(Object.assign({}, Product), newPrice);
}
const updatedBread = uptadeProductPrice(bread, { price: 12 });
console.log(updatedBread);
