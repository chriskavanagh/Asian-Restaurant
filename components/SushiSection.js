import Image from "next/image";
import styles from "../styles/SushiSection.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SushiSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      controls.start({
        x: "100vw",
      });
    }
  }, [inView, controls]);
  return (
    <div ref={ref} className="container pt-5" style={{ marginTop: "42rem" }}>
      <div className="row g-0 ">
        <div className="col-xl-6 ">
          <motion.div animate={animation}>
            <Image
              src="/szechuans/1.jpg"
              layout="responsive"
              width={648}
              height={394}
              alt="sushi"
            />
          </motion.div>
          {/* <h2>{console.log(scrollY.current, scrollY.prev)}</h2> */}
        </div>
        <div className="col-xl-6 bg-light">
          <motion.div animate={controls}>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
