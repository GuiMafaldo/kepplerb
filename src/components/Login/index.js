import { DivContainer, DivForm, FormLogin, SelectIdioma } from "./Form";
import Aside from '../Central-page/Aside'

function LoginPage ()  {

    return(
        <DivContainer>
            <h2>Login</h2>
            <DivForm>
                <FormLogin>
                    <input type="text" placeholder="Usuario" required/>
                    <input type="number" placeholder="Senha" required />
                </FormLogin>
                <p>Não possui cadastro ? <span>Clique Aqui</span> </p>
                <a onSubmit={Aside} href="#Aside">Entrar</a>
            </DivForm>
            <SelectIdioma>
            <h2>KerpplerB</h2>
            <select>
                <option value="pt-br">Português</option>
                <option value="english">Ingles</option>
            </select>
            <img src="/imagens/iconeGlobo.png"  alt="logo"/>
            </SelectIdioma>
        </DivContainer>

    )
}

export default LoginPage;
