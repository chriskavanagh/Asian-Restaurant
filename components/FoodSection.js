import React from "react";
import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="container" style={{ marginTop: "20rem" }}>
      <div className="row justify-content-center">
        <div className="col col-lg-3">
          <div className="card">
            <Image
              src="/szechuans/gentso.jpg"
              width={400}
              height={400}
              alt="generals"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </p>
            </div>
          </div>
        </div>
        <div className="col col-lg-3">
          <div className="card">
            <Image
              src="/szechuans/gentso.jpg"
              width={400}
              height={400}
              alt="generals"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </p>
            </div>
          </div>
        </div>
        <div className="col col-lg-3">
          <div className="card">
            <Image
              src="/szechuans/gentso.jpg"
              width={400}
              height={400}
              alt="generals"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
