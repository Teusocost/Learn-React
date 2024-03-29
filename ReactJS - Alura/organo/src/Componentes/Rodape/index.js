
import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=en" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>

        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>
    )
}

export default Rodape
