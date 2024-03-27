import './Time.css'

const Time = (props) => {

const css = { backgroundColor: props.corSecundaria }
const css_h3 = { borderColor: props.corPrimaria }

    return (
        <section className = "Time" style={css}>
            <h3 style={css_h3} >{props.nome}</h3>
        </section>

    )
}


export default Time