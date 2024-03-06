import "../index.css";

function Footer() {
  return (
    <>
      <div className="footer-text">
        <div className="logo-wrapper">
          <a href="#">
            <img className="slogo" src="/logo.png" alt="Logo" />
          </a>
        </div>
        <p>
          Built by <span>Yousef Musabeh</span> | All Rights Reserved.
        </p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
