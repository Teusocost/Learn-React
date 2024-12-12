// Generis
// TS -> tipar
// f -> tipo x
// f -> tipo y --- error
// f -> tipo G -> x,y

function getArray <T>(items: T[]): T[]{
    return new Array<T>().concat(items);
} 

let numberArray = getArray([1,2,4])
let stringArray = getArray(["1","dois","tres"])

console.log(numberArray)
console.log(stringArray)

function merge<T extends object,U extends object>(obj: T, obj2: U){
    return {...obj,...obj2}
}

const result = merge(
    {nome: "mateus", age: 49},
    {job: "mecanico", inActive: true}
)

console.log(result)

//Utilitarios de tipo

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

function uptadeTodo(todo: Todo, fieldsToUpatde: Partial<Todo>){
    return {...todo,...fieldsToUpatde}
}

const meuTodo:Todo = {
    title: "Teste",
    description: "Descricao do teste",
    completed: false,
}

const todoAtualizado = uptadeTodo(meuTodo, {completed: true})

console.log(todoAtualizado)

// somente leitura

const meuSegundotodo: Readonly<Todo> = {
    title: "Teste",
    description: "Descricao do teste",
    completed: false,
}

