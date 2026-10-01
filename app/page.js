import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

      <img
        src="/4.gif"
        className={styles.background}
        alt=""
      />

      <div className={styles.overlay}></div>

      <section className={styles.hero}>
        <p className={styles.smallText}>
          WELCOME TO MY WEBSITE
        </p>

        <h1>I'm Thristan</h1>

        <p className={styles.description}>
          Welcome to my personal website. Explore my projects,
          learn more about me, and see my gallery.
        </p>
      </section>

      <section className={styles.sections}>
        <div className={styles.cards}>

          <a href="/portfolio" className={styles.card}>
            <h3>Portfolio</h3>
            <p>
              Explore my projects and works.
            </p>
            <span>View →</span>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About Me</h3>
            <p>
              Learn more about me and my interests.
            </p>
            <span>View →</span>
          </a>

          <a href="/gallery" className={styles.card}>
            <h3>Gallery</h3>
            <p>
              See my photos and memorable moments.
            </p>
            <span>View →</span>
          </a>

        </div>
      </section>

    </main>
  );
}