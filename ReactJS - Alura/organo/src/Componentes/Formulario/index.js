import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DEvops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("form foi submetido")
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira uma nova pessoa</h2>
                <CampoTexto obrigatorio = {true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio = {true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario