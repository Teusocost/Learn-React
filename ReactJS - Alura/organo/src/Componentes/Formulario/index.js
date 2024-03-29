import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')
    const [curiosidade, setCuriosidade] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            curiosidade,
            time
        })
        //console.log("form foi submetido => ", nome, cargo, imagem, curiosidade, time)
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setCuriosidade('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira uma nova pessoa</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <CampoTexto
                    obrigatorio = {true} 
                    label="Curiosidade" 
                    placeholder="Digite uma curiosidade"
                    valor = {curiosidade}
                    aoAlterado = {valor => setCuriosidade(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)} 
                />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario