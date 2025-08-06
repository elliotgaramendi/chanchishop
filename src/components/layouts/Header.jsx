import Offcanvas from "./Offcanvas";

const Header = ({ shoppingCart }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Chanchishop</a>
          <div className="d-flex gap-2">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="btn btn-light d-md-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              🛒
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
          <a className="btn btn-light d-none d-md-block ms-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            🛒
          </a>
        </div>
      </nav>
      <Offcanvas data={shoppingCart} />
    </header>
  );
};

export default Header;