import { useLocation } from 'react-router-dom'
import Message from "../layout/Message"
import Container from "../layout/Container"
import ProjectCard from '../project/ProjectCard'
import LinkBotton from '../layout/LinkBotton'
import { useState, useEffect } from 'react'
import styles from './Projects.module.css'

function Projects() {

    const [project, setProject] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProject(data)
            })
            .catch((error) => console.error(error))
    },[])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1> Meus Projetos</h1>
                <LinkBotton to="/newproject" text="Criar Projeto" />
                {message && <Message msg={message} type="sucess" />}
            </div>
            <Container customClass="start">
                {project.length > 0 && 
                project.map((project) => (
                    <ProjectCard 
                        name={project.name} 
                        id = {project.id}
                        budget={project.budget}
                        category={project?.category?.name}
                        key={project.key}
                    />
                ))}
            </Container>
        </div>
    )
}

export default Projects