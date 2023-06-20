import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarcon">
        <div className="top">
          <div className="nav-left">
            <div className="navbarlogo py-6">ngedeppp</div>
          </div>
          <div className="position">
            <div className="nav">
              <div className="group nav-menu">
                <Link to="/">
                  <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                    Home
                  </div>
                </Link>
              </div>
              <div className="group nav-menu">
                <Link to="/projects">
                  <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                    Projects
                  </div>
                </Link>
              </div>
              <div className="group nav-menu">
                <Link to="https://dnea07.github.io/portfolio-devina-nathania/">
                  <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                    Portfolio
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
