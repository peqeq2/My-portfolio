import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sergio</h1>
        <p className={styles.description}>
        I&apos;m a full-stack developer learning React and Node.js for a year. I love building dynamic web apps. Let&apos;s connect!
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.callToAction}>
        <p className={styles.callToActionText}>Hire me</p>
      </div>
    </section>
  );
};
