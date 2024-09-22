import Button from './evento/Button';

function Evento() {
    function meuEvento() {
        console.log(`Evento ativado`);
    }

    function segundoEvento() {
        console.log(`Segundo ativado`);
    }

    return (
        <div>
            <p> Clique para disparar um evento: </p>
            <Button event = {meuEvento} text="Primeiro Evento"></Button> 
            <Button event = {segundoEvento} text="segundo evento"></Button> 
        </div>
    );
}

export default Evento;
