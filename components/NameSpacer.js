export default function NameSpacer() {
  return (
    <section
      className="text-light p-5 section"
      style={{ background: "#393e46e2" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-column align-items-center p-2">
              <h1 className="mb-4">Szechuan`s Restaurant</h1>
              <h5>4987 Bernard Dr Roanoke, VA 24018</h5>
              <h6>(540) 989-9487</h6>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          section {
            font-family: Poppins, sans-serif;
          }
          h1 {
            color: #b8860b;
            letter-spacing: 1.5px !important;
          }
        `}
      </style>
    </section>
  );
}
