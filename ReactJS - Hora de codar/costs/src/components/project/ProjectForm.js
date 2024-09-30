import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
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
            <Select name="category_id" text="Seleciona a categoria" />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;