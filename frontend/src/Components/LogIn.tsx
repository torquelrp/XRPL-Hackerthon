import "./LogIn.css"

const LogIn = () => {
  return (
    <div className="tudo">
      <div className="box">
        <h1>Login</h1>
        <br></br>
        <form className="center">
          <div>
            <label className="form-label text-dark">Username:</label>
            <input type="name" className="form-control" name="name" placeholder="Your username" required></input>
          </div>
          <br></br>
          <div>
            <label className="form-label text-dark">Password:</label>
            <input type="password" className="form-control" name="password" placeholder="Your password" required></input>
          </div>
          <br></br>
          <button type="submit" className="botao1">Login</button>
          <br></br>
          <h4>Don't you have an account?</h4>
          <a href="#CreateAnAccount" className="Link">Create an account</a>
        </form>
      </div>
      
      <div className="box2" id="CreateAnAccount">
        <h2>Create your account</h2>
        <br></br>
        <form className="center">
          <div>
            <label className="form-label text-dark">Username:</label>
            <input type="name" className="form-control" name="name" placeholder="Your username" required></input>
          </div>
          <br></br>
          <div>
            <label className="form-label text-dark">Password:</label>
            <input type="password" className="form-control" name="password" placeholder="Your password" required></input>
          </div>
          <br></br>
          <div>
            <label className="form-label text-dark">Repet your password:</label>
            <input type="password" className="form-control" name="password" placeholder="Your password" required></input>
          </div>
          <br></br>
          <button type="submit" className="botao1">Create your account</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;