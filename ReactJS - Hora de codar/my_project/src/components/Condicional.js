import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setuserEmail] = useState();
    function EnviarEmail(e) {
        e.preventDefault();
        setuserEmail(email);
        console.log(userEmail);
    }
    
    function Limparemail(e) {
        e.preventDefault();
        setuserEmail('');
    }
    return (
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={EnviarEmail}>
                    enviar e-mail
                </button>
            </form>
            {userEmail && (
                <>
                    <p> O e-mail do usuário é: {userEmail}</p>
                    <button onClick={Limparemail}>Limpar Email</button>
                </>
            )}
        </div>
    );
}

export default Condicional;
