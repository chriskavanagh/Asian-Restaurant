import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/SushiSection.module.css";
import { useInView } from "react-intersection-observer";

function SushiMobile() {
  useEffect(() => {
    console.log("sushi mobile loaded");
  });
  return (
    <section className="bg-dark">
      <div className={["container" + " " + styles.sushi]}>
        <div className="row g-0 ">
          <div className="col-xl-6 ">
            <Image
              src="/szechuans/1.jpg"
              layout="responsive"
              width={648}
              height={394}
              alt="sushi"
            />
          </div>
          <div className="col-xl-6 bg-light">
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
    </section>
  );
}

function SushiDesktop() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const animation = useAnimation();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { ease: "easeIn", delay: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 0.6,
      });
    }
  }, [inView, animation]);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: {
          ease: "easeIn",
          duration: 0.5,
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
    <section className={["bg-dark" + " " + styles.section]}>
      <div ref={ref} className={["container" + " " + styles.sushi]}>
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
    </section>
  );
}

export default function SushiSection() {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  // checks screen size when dom loads
  useEffect(() => {
    let mounted = true;
    const mediaQuery = "(max-width: 768px)";
    const mediaQueryList = window.matchMedia(mediaQuery);
    if (mounted) {
      if (mediaQueryList.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);

  return <>{isMobile ? <SushiMobile /> : <SushiDesktop />}</>;
}

/* export default function SushiSection() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("DOMContentLoaded", handleResize);

    return () => window.removeEventListener("DOMContentLoaded", handleResize);
  }, []);

  return <>{width <= 780 ? <SushiMobile /> : <SushiDesktop />}</>;
} */
