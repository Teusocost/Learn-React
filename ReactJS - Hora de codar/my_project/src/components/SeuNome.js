function SeuNome({setNome}) {
    
    return (
        <>
            <p> Digite seu nome:</p>
            <input 
                type="text" 
                placeholder="Digite Seu nome" 
                onChange = {(e) => setNome(e.target.value)}
            />
        </>
    );
}

export default SeuNome;
