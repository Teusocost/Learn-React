import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((data) => {setProject(data)})
        .catch((err) => console.error(err))
    },[])

    return (
        <p>{project.name}</p>
    )
}

export default Project;