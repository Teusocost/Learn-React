


function Pessoa({nome,idade,profissao,foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h1>{nome}</h1>
            <p>{idade} anos</p>
            <p>{profissao}</p>
        </div>
    )
}

export default Pessoa;