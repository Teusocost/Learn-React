import {useLocation} from 'react-router-dom'
import Message from "../layout/Message"
import Container from "../layout/Container"
import styles from './Projects.module.css'

import LinkBotton from '../layout/LinkBotton'

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    return (
    <div className = {styles.project_container}>
        <div className = {styles.title_container}>
            <h1> Meus Projetos</h1>
            <LinkBotton to="/newproject" text="Criar Projeto" />
            {message && <Message msg = {message} type = "sucess" />}
        </div>
        <Container customClass ="start">
            <p>Projetos...</p>
        </Container>
    </div>)
}

export default Projects