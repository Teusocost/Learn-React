// Generis
// TS -> tipar
// f -> tipo x
// f -> tipo y --- error
// f -> tipo G -> x,y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 4]);
let stringArray = getArray(["1", "dois", "tres"]);
console.log(numberArray);
console.log(stringArray);
function merge(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
const result = merge({ nome: "mateus", age: 49 }, { job: "mecanico", inActive: true });
console.log(result);
function uptadeTodo(todo, fieldsToUpatde) {
    return Object.assign(Object.assign({}, todo), fieldsToUpatde);
}
const meuTodo = {
    title: "Teste",
    description: "Descricao do teste",
    completed: false,
};
const todoAtualizado = uptadeTodo(meuTodo, { completed: true });
console.log(todoAtualizado);
// somente leitura
const meuSegundotodo = {
    title: "Teste",
    description: "Descricao do teste",
    completed: false,
};
