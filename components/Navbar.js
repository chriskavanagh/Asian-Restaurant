import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark pb-2"
      style={{
        background: "#080808",
        borderBottom: "black 1px solid",
      }}
    >
      <div className="container">
        <Image src="/szechuans/logo2.jpg" width={200} height={50} alt="sushi" />
      </div>
    </nav>
  );
}
