import {useEffect, useState} from 'react'

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {


    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => { //semelhante ao useState, mas é feito para o react n entrar em loop
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    },[]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ... project,[e.target.name]: e.target.value})
        console.log("Project - ", project)
    }
        
    return (
        <form onSubmit = {submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                placeholder="Indica o nome do projeto"
                name="name"
                handleOnChange={handleChange}
                />
            <Input
                type="Number"
                text="Orçamento"
                placeholder="Insira o orcamento total"
                name="budget"
                handleOnChange={handleChange}
            />
            <Select 
                name="category_id" 
                text="Seleciona a categoria" 
                options = {categories}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;