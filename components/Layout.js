import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="content">{children}</div>
      {/* <Footer /> */}
    </>
  );
}
