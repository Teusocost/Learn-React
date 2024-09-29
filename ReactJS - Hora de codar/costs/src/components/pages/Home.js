import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkBotton from '../layout/LinkBotton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Conteudo <span>Costs</span></h1>
            <p>Comece a gerencias os seus projetos agora mesmo!</p>
            <LinkBotton to="newproject" text="Criar Projeto"/>
            <img src={savings} alt='Savings' />
        </section>
    )
}

export default Home