import Image from "next/image";
import styles from "../styles/FoodSection.module.css";

export default function FoodSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className={["text-center text-white-50" + " " + styles.myH1]}>
              <span className={[styles.span, styles.small].join(" ")}>
                Discover
              </span>{" "}
              Our Amazing Menu!
            </h1>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card mx-auto">
              <Image
                src="/svg/driver.svg"
                width={400}
                height={400}
                alt="generals"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fst-italic mt-2">
                  Spring Rolls
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card`s content.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-secondary mt-3 myBtn"
                  style={{ borderRadius: "17px" }}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card mx-auto">
              <Image
                src="/svg/mobile.svg"
                width={400}
                height={400}
                alt="generals"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fst-italic mt-2">
                  Generals Chicken
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card`s content.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-secondary mt-3 myBtn"
                  style={{ borderRadius: "17px" }}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card mx-auto">
              <Image
                src="/szechuans/spring.jpg"
                width={400}
                height={400}
                alt="generals"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fst-italic mt-2">
                  Spring Rolls
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card`s content.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-secondary mt-3 myBtn"
                  style={{ borderRadius: "17px" }}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card mx-auto">
              <Image
                src="/szechuans/beef.jpg"
                width={400}
                height={400}
                alt="generals"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fst-italic mt-2">
                  Beef & Broccoli
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card`s content.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-secondary mt-3 myBtn"
                  style={{ borderRadius: "17px" }}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
