import Image from "next/image";
import styles from "../styles/Top.module.css";
/* import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import { motion } from "framer-motion";

export default function Top() {
  return (
    <section className={["bg-dark" + " " + styles.top__section]}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
              }}
            >
              <h1 className={styles.topH1}>
                <span className={styles.span}>Discover</span> Our Award Winning
                Food!
              </h1>

              <p className={styles.topP}>
                Szechuan Restaurant Opened In 1989 In The Roanoke Valley.
              </p>
              <p className={styles.btmP}>
                We Serve Traditional Chinese, Japanese Food Including Sushi And
                Spirits.
              </p>

              <button
                type="button"
                className={["btn btn-light" + " " + styles.btn]}
              >
                See Our Menu
              </button>
            </motion.div>
          </div>

          <div className="col-md-8 mb-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
              }}
            >
              <Image
                src="/szechuans/peking-duck.jpg"
                layout="responsive"
                width={1100}
                height={650}
                alt="sushi"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
