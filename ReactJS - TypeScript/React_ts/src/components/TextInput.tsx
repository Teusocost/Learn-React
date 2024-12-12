import { useState } from "react";

const TextInput = () => {
    const [text,setText] = useState<string>("nothing");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("form enviado");
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}></input>
            <p>{text}</p>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default TextInput;