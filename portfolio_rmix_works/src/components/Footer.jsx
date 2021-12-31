import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="text-center bg-dark">
         <p className="footer_text">© 2021 Copyright:</p>
          <Link className="text-reset fw-bold" to="/">
            <p className="nav-link">RmiX Works</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
