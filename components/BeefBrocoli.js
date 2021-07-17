import Image from "next/image";
import styles from "../styles/BeefBroccoli.module.css";

export default function BeefBroccoli() {
  return (
    <section className={["bg-dark" + " " + styles.section]}>
      <div className={["container" + " " + styles.sushi]}>
        <div className="row g-0 ">
          <div className="col-xl-6 bg-light">
            <div className={styles.rContainer}>
              <h4 className={styles.myH4}>Discover</h4>
              <h1 className={styles.myH2}>Our Food</h1>
              <p className={styles.myP}>
                We offer a wide variety of Chinese/Asian food including Beef &
                Broccoli, Generals Chicken, Patti, and other great selections!
                Not to mention Apps.
              </p>
              <p className={styles.btmP}>See More Food &#129066;</p>
            </div>
          </div>
          <div className="col-xl-6 ">
            <Image
              src="/szechuans/beef.jpg"
              layout="responsive"
              width={648}
              height={394}
              alt="sushi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
