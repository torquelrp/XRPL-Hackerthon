import "./SmallNews.css"

type Props = {imagem: string, titulo: string, descricao: string}

const SmallNews = (props: Props) => {
    return (
        <div className="boxNews">
            <div className="center">
                <img src={props.imagem} alt="imagem" className="imagem"></img>
            </div>
                <h2>{props.titulo}</h2>
                <h4>{props.descricao}</h4>
        </div>
    );

}

export default SmallNews;