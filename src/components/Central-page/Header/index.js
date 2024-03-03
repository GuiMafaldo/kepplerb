import { HeaderPage, DivListItens, DivHeader } from "./Header";

function InitialPage() {
    return(
        <HeaderPage>
            <DivHeader>
            <img src="/imagens/iconeEngrenagem.png.png" alt="Logo engrenagem" />
            <h1>KepplerB</h1>
            </DivHeader>
            <DivListItens>
            <nav>
                <ul>
                    <li>
                        Central
                    </li>
                    <li>
                        Usuario: Admin
                    </li>
                    <li>02/03/2024</li>
                </ul>
            </nav>
            </DivListItens>

        </HeaderPage>

    )

}

export default InitialPage;
