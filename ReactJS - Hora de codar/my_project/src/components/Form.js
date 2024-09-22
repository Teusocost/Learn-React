import { useState } from 'react';

function Form(){

    const [name,setName] = useState(''); // Valor que inicia quando iniciado
    const [pass,setPass] = useState('');
    
    function cadastrarusuario(e){
        e.preventDefault() //nao atualiza a pagina
        console.log("cadastrarusuario - " + name)
        console.log("senha: " + pass)
    }
    return (
        <>
            <h1> Meu cadastro</h1>
            <form onSubmit = {cadastrarusuario}>
                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input  type="text" 
                            id = "name"
                            placeholder="Digite seu nome" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Senha: </label>
                    <input  type="password" 
                            id = "password"
                            placeholder="Digite sua senha" 
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                    <input type="submit" value="Cadastrar" /> 
            </form>
        </>
    )
}

export default Form