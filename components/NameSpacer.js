export default function NameSpacer() {
  return (
    <section className="text-light p-5" style={{ background: "#393e46e2" }}>
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3
            className="mb-3 mb-md-0 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Szechuan`s Restaurant
          </h3>

          <div>
            <h3 className="address">4987 Bernard Dr Roanoke, VA 24018</h3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h3 { font-family: Poppins, sans-serif}
          @media screen and (max-width: 780px) {
            .news-input {
              width: 100%;
            }
            .text {
              font-size: 1.3rem;
            }
            .address {
              font-size: 1.1rem;
            }
        `}
      </style>
    </section>
  );
}
