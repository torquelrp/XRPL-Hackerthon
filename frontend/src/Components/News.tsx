import BigNews from "./BigNews/BigNews";
import "./News.css"
import SmallNews from "./SmallNews/SmallNews";

const News = () => {
  return (
    <>
      <div className="coluna">
        <BigNews imagem="../../public/0.jpg" titulo="Lorem ipsum dolor sit amet consectetur adipisicing." descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sapiente aperiam doloremque ea veritatis, deserunt numquam, cum sequi quam, et iusto quod sint minima dignissimos. Alias animi dignissimos incidunt. Possimus, veritatis. Numquam veniam voluptatem quam, ipsam in itaque quisquam harum?" href="Example" />
        <div className="noticias">
          <SmallNews imagem="../../public/1.jpg" titulo="Lorem ipsum dolor sit." descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellat." />
          <SmallNews imagem="../../public/2.jpg" titulo="Lorem, ipsum dolor." descricao="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, explicabo ut?" />
          <SmallNews imagem="../../public/3.jpg" titulo="Lorem, ipsum." descricao="Lorem ipsum dolor sit amet, consectetur adipisicing." />
          <SmallNews imagem="../../public/4.jpg" titulo="Lorem, ipsum dolor." descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          <SmallNews imagem="../../public/5.jpg" titulo="Lorem ipsum dolor sit." descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus officia quisquam earum omnis fugit!" />
          <SmallNews imagem="../../public/6.jpg" titulo="Lorem ipsum dolor sit." descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sequi." />
          <SmallNews imagem="../../public/7.jpg" titulo="Lorem, ipsum." descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis!" />
          <SmallNews imagem="../../public/8.jpg" titulo="Lorem ipsum dolor sit." descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eos maxime fugiat doloribus!" />
          <SmallNews imagem="../../public/9.jpg" titulo="Lorem, ipsum dolor." descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        </div>
      </div>
    </>
  );
};

export default News;