import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

const css = { backgroundColor: props.corSecundaria }
const css_h3 = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className = "Time" style={css}>
            <h3 style={css_h3} >{props.nome}</h3>
            <div className = "colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador  
                                    key = {colaborador.nome}
                                    nome = {colaborador.nome} 
                                    cargo = {colaborador.cargo}
                                    imagem = {colaborador.imagem}
                                    curiosidade = {colaborador.curiosidade}
                                    corDeFundo = {props.corPrimaria}
                                    />)}
            </div>
        </section>
        :'' //operador ternario

    )
}


export default Time