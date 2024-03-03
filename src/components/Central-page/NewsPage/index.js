import { ContainerCentral, DivCarousel, ImagensCarousel, ContainerCentral2, DivCarousel2} from "./News-Att";

const NewsAndAtualizações = () => {
    return (
        <>
            <ContainerCentral>
            <h2>Noticias da semana</h2>
            <DivCarousel>
                <ImagensCarousel src="/imagens/carousel1.jpg" alt="imagem" />
                <h4>Titulo noticia</h4>
                <p>Lorem ipsum</p>
            </DivCarousel>
        </ContainerCentral>
        <ContainerCentral2>
            <h2>Atualizações</h2>
            <DivCarousel2>
                <ImagensCarousel src="/imagens/carousel1.jpg" alt="imagem" />
                <ImagensCarousel src="/imagens/carousel2.jpg" alt="imagem" />
                <ImagensCarousel src="/imagens/carousel3.jpg" alt="imagem" />
            </DivCarousel2>
        </ContainerCentral2>
        </>
    )
}

export default NewsAndAtualizações;