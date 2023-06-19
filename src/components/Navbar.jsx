import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div class="navbarcon">
        <div class="top">
          <div class="nav-left">
            <a href="#home" class="navbarlogo py-6">
              ngedeppp
            </a>
          </div>
          <div class="position">
            <div class="nav">
              <div class="group nav-menu">
                <Link to="/">
                  <a>Home</a>
                </Link>
              </div>
              <div class="group nav-menu">
                <Link to="/projects">
                  <a>Projects</a>
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
