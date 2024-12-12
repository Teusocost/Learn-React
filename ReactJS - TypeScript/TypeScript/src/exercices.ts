// trabalhando com interfaces

// Defina uma interace Vehicle que represente um veículo, com propriedade par amake (marca),. model (modelo) e year (ano).
//Crie uma função que aceite um Vehicle como argumento e imprima uma descrição do veículo.

interface Vehicle {
    make: string;
    model: string;
    year: number;
}

function DescribleVehicle(Vehicle: Vehicle): void{
    console.log(`This ${Vehicle.year} ${Vehicle.make} ${Vehicle.model} is a great choice.`);
}

const mycar: Vehicle = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
}

DescribleVehicle(mycar); 


// Exercicio 2 
// Crie uma funcao generica firstElement que retorne o primeiro item de um array.
// A funcao deve ser capaz de trabalhar com qualquer tipo de dado

function firstElement<T>(arr: T[]): void{
    console.log(arr[0]);
}

firstElement([2,1,3])

// exercicio 3 uso de eandoly  e Partial

// Dado um tipo Product abaixo, crie uma função freezeProduct que torne um produto imutável.
// Em seguida, crie outra funcao uptadeProductPrice que atualize apenas o preço de um produto, demonstrando o uso de Partial 
// id, name e prince

type Product = {
    id: number;
    name: string;
    price: number;
}

function freezeProduct(Product:Product):Readonly<Product>{
    return Product;
}

const bread: Product= {
    id: 1,
    name: 'Bread',
    price: 10,
}

const frozenBread = freezeProduct(bread)

function uptadeProductPrice(Product:Product, newPrice:Partial<Product>): Product { 
    return {... Product,  ...newPrice}
}

const updatedBread = uptadeProductPrice(bread, {price: 12})
console.log(updatedBread)