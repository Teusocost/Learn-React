import { useLocation } from 'react-router-dom'
import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from '../layout/Loading'
import ProjectCard from '../project/ProjectCard'
import LinkBotton from '../layout/LinkBotton'
import { useState, useEffect } from 'react'
import styles from './Projects.module.css'

function Projects() {

    const [project, setProject] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => { //só pra simular o loader
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
                    setRemoveLoading(true)
                })
                .catch((error) => console.error(error))
        }, 3000)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProject(project.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso')
            }
            )
            .catch((error) => console.error(error))
    }
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1> Meus Projetos</h1>
                <LinkBotton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="sucess" />}
            {projectMessage && <Message msg={projectMessage} type="sucess" />}
            <Container customClass="start">
                {project.length > 0 &&
                    project.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project?.category?.name}
                            key={project.key}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && project.length === 0 && (
                    <p>Você não possui projetos cadastrados!</p>
                )
                }
            </Container>
        </div>
    )
}

export default Projects