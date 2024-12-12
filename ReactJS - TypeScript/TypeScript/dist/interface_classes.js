//definindo interface
// tabelas => enteidade? User -> nome, email, senha
// back => front
// Interface => maepar todos os campos 
//Utilizandio interface
const myUser = {
    id: 1,
    name: 'John Doe',
    isActive: true,
};
// Classes
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    greet(isNew) {
        console.log(`Hello, my name is ${this.name}`);
        if (isNew) {
            console.log("e sou novo por aqui!");
        }
    }
}
console.log(myUser);
const personData = new Person(14, "João", true);
console.log(personData);
personData.greet(true);