import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return (<footer className={styles.footer}>
        <ul  className={styles.social_list}>
            <li id={styles.l1}><FaFacebook /></li>
            <li id={styles.l2}><FaInstagram /></li>
            <li id={styles.l3}><FaLinkedin /></li>
        </ul>
        <p className={styles.copy_right}><span >Costs</span> &copy; 2021</p>
    </footer>
        )
}

export default Footer