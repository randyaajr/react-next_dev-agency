import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Design from "./Design";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Design backgroundColor="#bb05057c" top="-50vh" left="-50vh" />
      <Design backgroundColor="#bb0505af" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>Randycodes</span> Web Design &
          Development Agency
        </h1>
        <p className={styles.desc}>
          We help clients define, communicate, and realize their brand.
          Developing world-class digital products for businesses at the top of
          their field, or who aspire to be! Our core specialties are Web Design
          & Development, Music & Cinimatic Video Production, Content Creation,
          and Branding.
        </p>
        <button className={styles.btn}>GET A QUOTE</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/Randycodes.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
