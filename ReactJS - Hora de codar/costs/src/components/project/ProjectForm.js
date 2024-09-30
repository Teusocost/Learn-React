import {useEffect, useState} from 'react'

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {


    const [categories, setCategories] = useState([])
    
    useEffect(() => {
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
        
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                placeholder="Indica o nome do projeto"
                name="name"
            />
            <Input
                type="Number"
                text="Orçamento"
                placeholder="Insira o orcamento total"
                name="budget"
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