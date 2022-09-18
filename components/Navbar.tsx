import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {};
  }, []);

  return (
    <header
      className={`header ${scrolled ? "header__scrolled" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-leaf-line nav__logo-icon"></i> {"<A/>"}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#faqs" className="nav__link">
                FAQs
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i className="ri-moon-line change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
