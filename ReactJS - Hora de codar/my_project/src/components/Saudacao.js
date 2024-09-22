function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}!`;
    }
    return <>{ nome && gerarSaudacao(nome)} </>
}

export default Saudacao;