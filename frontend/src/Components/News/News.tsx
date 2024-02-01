import "./News.css"

type Props = {imagem: string, titulo: string, descricao: string}

const News = (props: Props) => {
    return (
        <div className="boxNews-News">
            <div className="center-news">
                <h1>{props.titulo}</h1>
                <br></br>
                <img src={props.imagem} alt="imagem" className="imagem-news"></img>
                <br></br>
                <br></br>
                </div>
                <h4 className="texto-alinhamento">{props.descricao}</h4>
        </div>
    );

}

export default News;