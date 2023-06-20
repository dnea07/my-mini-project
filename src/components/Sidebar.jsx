import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPaintBrush } from "react-icons/fa";
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="full">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top-section" onClick={() => toggle()}>
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            mini projects
          </h1>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <FaBars />
          </div>
        </div>
        <hr />
        <div className="menu-content">
          <div>
            <Link to="/paint" className="link">
              <FaPaintBrush />
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Paint
              </div>
            </Link>
            {/* <div>
              <div
                className={isOpenCategory ? "linkselected" : "link"}
                onClick={() => toggleCategory()}
              >
                <FaFolder />
                <div style={{ display: isOpen ? "block" : "none" }}>Category</div>
                {!isOpenCategory && (
                  <FaChevronRight
                    style={{
                      display: isOpen ? "block" : "none",
                      marginLeft: isOpen ? "110px" : "0px",
                    }}
                  />
                )}
                {isOpenCategory && (
                  <FaChevronDown
                    style={{
                      display: isOpen ? "block" : "none",
                      marginLeft: isOpen ? "110px" : "0px",
                    }}
                  />
                )}
              </div>
              <div
                className="dropdown"
                style={{ height: isOpenCategory ? 100 : 0 }}
              >
                <Link
                  to="/subcategory1"
                  className={isOpen ? "link dropdowncontent" : "link"}
                  style={{ display: roleAdmin ? "flex" : "none" }}
                >
                  <FaFileAlt />
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Sub Category 1
                  </div>
                </Link>
                <Link
                  to="/subcategory2"
                  className={isOpen ? "link dropdowncontent" : "link"}
                  style={{ display: roleAdmin ? "flex" : "none" }}
                >
                  <FaServer />
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    SubCategory2
                  </div>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Sidebar;
