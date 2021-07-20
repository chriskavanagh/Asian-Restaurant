export default function Spacer() {
  return (
    <section className="text-light p-5" style={{ background: "#393e46e2" }}>
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3
            className="mb-3 mb-md-0 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Find Your Favorite Dish!
          </h3>

          <div className="input-group news-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Dish"
            />
            <button className="btn btn-dark btn-lg" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .news-input {
            width: 50%;
          }
          @media screen and (max-width: 780px) {
            .news-input {
              width: 100%;
            }
            .text {
              font-size: 1.3rem;
            }
          }
        `}
      </style>
    </section>
  );
}
