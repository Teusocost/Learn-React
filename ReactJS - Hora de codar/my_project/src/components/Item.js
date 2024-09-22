import PropsTypes from 'prop-types' 

function Item({marca,ano_lancamento}){
    return (
        <>
            <li>{marca} = {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropsTypes.string.isRequired, // Isso define-a como obrigatória
    ano_lancamento: PropsTypes.number // Isso define-a como obrigatória
}

Item.defaultProps = {
    marca: "Desconhecido",
    ano_lancamento: "Não informado", // Se não passar nenhum valor, assume-o como 0.
}
export default Item;