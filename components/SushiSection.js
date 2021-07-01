import Image from "next/image";
import styles from "../styles/SushiSection.module.css";

export default function SushiSection() {
  return (
    <div className="container mt-5">
      <div className="row g-0">
        <div className="col-6  bg-warning">
          <Image
            src="/szechuans/1.jpg"
            layout="responsive"
            width={648}
            height={394}
            alt="sushi"
          />
        </div>
        <div className="col-6 bg-light">
          <div className={styles.rContainer}>
            <h4 className={styles.myH4}>Discover</h4>
            <h1 className={styles.myH2}>Our Sushi</h1>
            <p className={styles.myP}>
              We offer a wide variety of sushi including our own homemade
              selections of Sushi roles. Customers love our Spicy Tuna and
              California Roles!
            </p>
            <p className={styles.btmP}>See More Sushi &#129066;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
