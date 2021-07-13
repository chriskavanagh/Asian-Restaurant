import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="circle"></div> */}
      <Navbar />
      <div className="content">{children}</div>

      {/* <Footer /> */}
    </>
  );
}
