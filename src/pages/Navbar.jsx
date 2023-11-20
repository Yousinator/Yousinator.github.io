import React, { useEffect } from "react";
import "../index.css";

function Navbar() {
  useEffect(() => {
    /*==================== toggle icon navbar ====================*/
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    const handleMenuClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    menuIcon.addEventListener("click", handleMenuClick);

    /*==================== scroll sections active link ====================*/
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });

      /*==================== sticky navbar ====================*/
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <>
      <div className="logo-wrapper">
        <a href="#">
          <img className="slogo" src="/logo.png" alt="Logo" />
        </a>
        <a href="#" className="logo">
          Yousef <span>Musabeh</span>
        </a>
      </div>

      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#timeline-section">Expereince</a>
        <a href="#services">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  );
}

export default Navbar;
