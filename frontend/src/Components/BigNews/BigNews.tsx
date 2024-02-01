import "./BigNews.css"

type Props = { imagem: string, titulo: string, descricao: string, href: string }

const BigNews = (props: Props) => {
    return (
        <div className="boxNewsBig">
            <div className="linha">
                <img src={props.imagem} alt="imagem" className="imagemBig"></img>
                <div className="coluna-big">
                    <h1>{props.titulo}</h1>
                    <br></br>
                    <h4>{props.descricao}</h4>
                    <br></br>
                    <br></br>
                    <a href={props.href} className="Link">Know more about it</a>
                </div>
            </div>
        </div>
    );

}

export default BigNews;