import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        // initialize const and services
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }
        )
            .then
            ((res) => res.json())
            .then
            ((data) => {
                console.log(data)
                //redirect
                history('/projects',{state: {message: "Projeto criado com sucesso"}})

            })
            .catch
            ((err) => { console.log(err) })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p> Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject