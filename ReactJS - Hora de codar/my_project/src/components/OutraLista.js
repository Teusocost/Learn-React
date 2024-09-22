function OutraLista({itens}){
    return(
        <>
        <h3>Lista de nomes:</h3>
        { itens.lenght >0 ? (
            itens.map((item,index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não ha ítens na lista!</p>
            )
        }
        </>
    )
}

export default OutraLista;