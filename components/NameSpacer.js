export default function NameSpacer() {
  return (
    <section className="text-light p-5 section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column align-items-center p-2">
              <h1 className="mb-4">Szechuan`s Restaurant</h1>
<<<<<<< HEAD
              <h5>4987 Bernard Dr Roanoke, VA</h5>
              <h6>(540) 989-9487</h6>
=======
              <h5 className="text-white">4987 Bernard Dr Roanoke, VA</h5>
              <h6 className="text-white">(540) 989-9487</h6>
>>>>>>> testing
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section {
            font-family: Poppins, sans-serif;
            background: #393e46e2;
          }
          h1 {
            color: #b8860b;
            letter-spacing: 1.5px !important;
            text-decoration: underline;
          }
          @media screen and (max-width: 780px) {
            h1 {
<<<<<<< HEAD
              font-size: 1.3rem;
=======
              font-size: 1.4rem;
>>>>>>> testing
              letter-spacing: 1px !important;
            }
            h5 {
              font-size: 1.1rem;
            }
            h6 {
<<<<<<< HEAD
              font-size: 1.1rem;
=======
              font-size: 1rem;
>>>>>>> testing
            }
          }
        `}
      </style>
    </section>
  );
}
