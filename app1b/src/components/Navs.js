function Navs() {
    return (
        <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </nav>
    );
  }

export default Navs;

