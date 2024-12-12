import { useEffect, useState } from "react";

const Counter = () => {
    const [Counter,setCounter] = useState<number>(0)

    useEffect(() => 
    {
        console.log(`O contador está em ${Counter}`)
    },[Counter]);

    return(
        <>
            <h4>contador</h4>
            <p>{Counter}</p>
            <button onClick={() =>{setCounter((e) => e + 1 )}}>
            Incrementar
            </button>
            
        </>
    )
}

export default Counter;