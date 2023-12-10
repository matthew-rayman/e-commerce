import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const {user,logout} = useContext(AuthContext)

  window.addEventListener("scroll", () => {
    if (window.screenY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={` header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area animate__animated animate__fadeIn ">
             {user ? (
                      <>
                        <span className="me-3">Hello, {user.email}</span>
                        <button onClick={logout} className="lab-btn">
                          <span>Log Out</span>
                        </button>
                      </>
                    ) : (<>
                              <Link to="/sign-up"  onClick={() => setSocialToggle(!socialToggle)} className="lab-btn me-3">
                                <span>Create Account</span>
                              </Link>
                              <Link to="/login" onClick={() => setSocialToggle(!socialToggle)}>Login</Link>
                          </>)}
           </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/" onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={() => setMenuToggle(!menuToggle)}>Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={() => setMenuToggle(!menuToggle)}>Blog</Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuToggle(!menuToggle)}>About</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setMenuToggle(!menuToggle)}>Contact</Link>
                  </li>
                </ul>
              </div>
                {user ? (
                      <span className="d-none d-md-block">
                        <span className="me-3">Hello, {user.email}</span>
                        <button onClick={logout} className="lab-btn">
                          <span>Log Out</span>
                        </button>
                      </span>
                    ) : (<>
                          <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                            Create Account
                          </Link>
                          <Link to="/login" className="d-none d-md-block">
                            Login
                          </Link>
                         </>)}

              

              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${
                  menuToggle ? "active" : ""
                } `}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="ellepsis-bar  d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
