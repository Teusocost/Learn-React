import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="costs"></img>
        </Link>
        <ul class={styles.list}>
          <li className={styles.item}>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className={styles.item}>
            {" "}
            <Link to="/company">company</Link>{" "}
          </li>
          <li className={styles.item}>
            {" "}
            <Link to="/contact">contact</Link>{" "}
          </li>
          <li className={styles.item}>
            {" "}
            <Link to="/projects">Projects</Link>{" "}
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
