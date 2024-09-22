import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className = {styles.list}>
                <li className = {styles.item}><Link to="/">Home</Link></li>
                <li className = {styles.item}><Link to="/empresa">Empresa</Link></li>
                <li className = {styles.item}><Link to="/contato">contato</Link></li>
            </ul>
        </div>

    )
}

export default Navbar