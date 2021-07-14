import { useState } from "react";
import styles from "../styles/NavBar.module.css";
//import Image from "next/image";
//import Link from "next/link";
import {
  faPhoneVolume,
  faMapPin,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark p-3"
      style={{
        background: "#080808",
      }}
    >
      <div className="container-fluid px-1">
        <a
          className={["navbar-brand" + " " + styles.small]}
          id="brand"
          href="#"
        >
          Szechuan`s Restaurant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarText"
        >
          <ul className="navbar-nav mx-auto mx-4 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="contact"
                aria-current="page"
                href="#"
              >
                Contact Us:
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link " href="#">
                <FontAwesomeIcon icon={faPhoneVolume} color="#b8860b" />
                <span className="mx-2">540-989-4987</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faMapPin} color="#b8860b" />
                <span className="mx-2">4987 Bernard Dr Roanoke, VA 24018</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faLaptop} color="#b8860b" />
                <span className="mx-2">www.szechuan1.net</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-brand {
            color: #b8860b;
          }
          #contact {
            color: #ffffff;
            font-weight: bolder;
          }
          @media screen and (max-width: 1196px) {
            .active {
              display: none;
            }
          }
          @media screen and (max-width: 1015px) {
            span {
              font-size: 15px;
            }
          }
        `}
      </style>
    </nav>
  );
}
