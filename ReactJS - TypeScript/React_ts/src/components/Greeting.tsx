type GreetingProps = {
    name: string;
}
const Greeting = ({name}:GreetingProps) => {
    return (<>
    <h4>componente  {name}</h4>
    </>)
}

export default Greeting;