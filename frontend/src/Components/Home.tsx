import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="tudo">
        <div className="linha">
          <div className="content">
            <div className="text-container">
              <img src="../../public/Logo.png" className="imagem"></img>
              <h2 className="texto">Imagine reading quality news and only paying for reading time</h2>
              <br></br>
              <a href="#mais_informacoes" className="botao2">Find out more about this innovative proposal</a>
            </div>
          </div>

        </div>

        <div className="container-fluid" id="mais_informacoes">
          <div className="container text-center py-5">
            <div className="container mt-4">
              <h1 className="animated-element animated-text">HOW IT ALL WORKS?</h1>
              <br></br>
              <div className="coluna">
                <div className="coluna">
                  <div>
                    <h4 className="animated-element animated-text">
                    MicroRipplePay proposes a revolutionary approach by introducing micropayments. 
                    <br></br>
                    <br></br>
                    Imagine only paying for what you consume, whether it's reading a single article, watching a short video, or spending a few minutes on a streaming platform. 
                    <br></br>
                    <br></br>
                    Instead of hefty monthly subscriptions, users can now make micropayments for the exact amount of content they engage with.
                    <br></br>
                    </h4>
                  </div>
                </div>
                <br></br>
                <br></br>
                <a href="/News" className="animated-element botao1">Go to the news</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;