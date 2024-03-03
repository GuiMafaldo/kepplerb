import { DivGeral } from "./Aside";

function SideBarItens () {
    const areaDeTrabalho = {
        initialPage: "Pagina inicial",
        cadastro: "Cadastro",
        nf: "Nota fiscal",
        pedidoDeVenda: "Pedidos de venda",
        estruturas: "Estruturas"
    }
    return(
        <DivGeral id="Aside">
            <img src="https://via.placeholder.com/220x220" alt="My photo" />
            <nav>
            <h3>Central KepB</h3>
                <ul>
                    <li>
                        <a target="#initialPage" href="Pagina inicial">{areaDeTrabalho.initialPage}</a>
                    </li>
                    <li>
                        <a target="#cadastro" href="Cadastro">{areaDeTrabalho.cadastro}</a>
                    </li>
                    <li>
                        <a target="#notaFiscal" href="Nota fiscal">{areaDeTrabalho.nf}</a>
                    </li>
                    <li>
                        <a target="#vendas" href="Pedidos de Venda">{areaDeTrabalho.pedidoDeVenda}</a>
                    </li>
                    <li>
                        <a target="estrutura" href="Estruturas">{areaDeTrabalho.estruturas}</a>
                    </li>
                </ul>
            </nav>
        </DivGeral>

    )
}

export default SideBarItens;