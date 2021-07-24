import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <footer className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center">
              <h5 className="mb-3">Szechuan`s Restaurant</h5>
              <div className="txt">4987 Bernard Dr</div>
              <div className="txt">Roanoke, VA 24018</div>
              <div className="txt">
                &copy;Copyright 2021 Szechuan`s Restaurant
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <h5 className="mb-3">Contact Us</h5>
              <div className="txt">540-989-4987</div>
              <div className="txt">www.szechuan1.net</div>
              <div className="txt">www.szechuan1.com</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <h5 className="mb-3">Our Services</h5>
              <div className="txt">
                Delivery: 11:30 - 3:00 PM, 5:00 - 9:00 PM
              </div>
              <div className="txt">Pick Up: 11:30 AM - 9:00 PM</div>
              <div className="txt closure">Closed Tuesdays</div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .txt {
            font-size: 0.9rem;
            padding-bottom: 0.5rem;
          }
          h5 {
            color: #b8860b;
            font-size: 1rem;
            letter-spacing: 1.5px;
          }
          .closure {
            color: rgb(124, 124, 61);
          }
          @media screen and (max-width: 991px) {
            h5 {
              margin-top: 3rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Footer;
