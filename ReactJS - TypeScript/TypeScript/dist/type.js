// Numeros =: number, texto =: string, objeto => {name:string, age: number}
//tipos basicos:
let isActive;
isActive = true;
let total = 150;
let texto = "Mateus";
console.log(typeof isActive, typeof texto, typeof total);
//inferencias de tipos
let isComplete = false;
let amount = 200;
let username = "jhnn";
console.log(typeof isComplete, typeof amount, typeof username);
// Arrays e Objetos
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof numbers); //objeto
let user = {
    name: "Mateus",
    age: 30,
};
//tuplas
let rgb = [222, 222, 222];
console.log(typeof rgb); //objeto
//funcoes
function greet(nome) {
    return `Ola, ${nome}`;
}
console.log(greet("Mateus")); //é obrigado a passar string
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Voce esta subindo";
        case Direction.Down:
            return "Voce esta descendo";
        case Direction.Left:
            return "Voce esta indo para a esquerda";
        case Direction.Right:
            return "Voce esta indo para a direita";
        default:
            return "Voce não esta em uma direcao válida";
    }
}
console.log(getDirectionMessage(Direction.Down)); //imprime "Voce esta descendo"
console.log(getDirectionMessage(Direction.Left)); //imprime "Voce esta descendo"
console.log(getDirectionMessage(Direction.Right)); //imprime "Voce esta descendo"
