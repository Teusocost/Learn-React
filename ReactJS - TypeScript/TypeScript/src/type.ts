// Numeros =: number, texto =: string, objeto => {name:string, age: number}

//tipos basicos:

let isActive: boolean;
isActive = true;

let total:number=150
let texto:string="Mateus"

console.log(typeof isActive, typeof texto, typeof total );

//inferencias de tipos

let isComplete= false;

let amount = 200;

let username = "jhnn"

console.log(typeof isComplete, typeof amount, typeof username );

// Arrays e Objetos

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

console.log(typeof numbers); //objeto

let user: {name:string, age:number} ={ //tem que declarar cada item do array
    name: "Mateus",
    age: 30,
};

//tuplas

let rgb: [number,number,number] = [222,222,222]

console.log(typeof rgb); //objeto

//funcoes
function greet(nome:string): string {
    return `Ola, ${nome}`;
}

console.log(greet("Mateus")); //é obrigado a passar string

//Enum

enum Direction{
    Up,
    Down,
    Left,
    Right
}

function getDirectionMessage(direction: Direction): string{
    switch(direction){
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