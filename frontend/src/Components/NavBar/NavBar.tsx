import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/Home">Coffee Breaking News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/News">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/LogIn">LogIn</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;