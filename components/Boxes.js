import {
  faPhoneVolume,
  faUserFriends,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Box.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Boxes() {
  return (
    <>
      <section className="p-5 " style={{ background: "#393E46" }}>
        <div className="container">
          {/* <div className="text-center mb-5 text-white">
            <h2>
              <span className={styles.topSpan}>Discover</span> Our Services
            </h2>
          </div> */}
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faUserFriends} color="#b8860b" />
                  </div>
                  <h3 className="card-title mb-3">Dine In</h3>
                  <p className="card-text">
                    Come dine in with us in our warm atmosphere. Open Wedesday
                    through Monday (Closed Tue).
                  </p>
                  <a href="#" className="btn btn-outline-light">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faPhoneVolume} color="#b8860b" />
                  </div>
                  <h3 className="card-title mb-3">Pick Up</h3>
                  <p className="card-text">
                    Call us, or order online for a quick pickup. Phone (540)
                    989-4987 or szechuan1.net.
                  </p>
                  <a href="#" className="btn btn-outline-light">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FontAwesomeIcon icon={faShippingFast} color="#b8860b" />
                  </div>
                  <h3 className="card-title mb-3">Delivery</h3>
                  <p className="card-text">
                    We deliver too! Szechuan`s employees our own drivers and
                    offer a small $1.50 fee.
                  </p>
                  <a href="#" className="btn btn-outline-light">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
