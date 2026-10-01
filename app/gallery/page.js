import styles from "./page.module.css";

export default function Gallery() {
  return (
    <main className={styles.container}>

      <section className={styles.hero}>
        <p className={styles.label}>MEMORIES & ACHIEVEMENTS</p>

        <h1>My Journey</h1>

        <p>
          A collection of memories, experiences, achievements,
          and important moments from my student journey.
        </p>
      </section>

      <section className={styles.memories}>

        <div className={styles.memory}>
          <div className={styles.photoBox}>
            <span>PHOTO</span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>EDUCATION</p>
            <h2>Senior High School</h2>
            <p>
              One of the important milestones in my student journey
              was completing my Senior High School education at
              Davao City National High School.
            </p>
            <span className={styles.date}>Batch 2024–2025</span>
          </div>
        </div>

        <div className={styles.memory}>
          <div className={styles.photoBox}>
            <span>PHOTO</span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>COLLEGE</p>
            <h2>Starting My BSIT Journey</h2>
            <p>
              I started my Bachelor of Science in Information
              Technology journey at Holy Cross of Davao.
            </p>
            <span className={styles.date}>Current Student</span>
          </div>
        </div>

        <div className={styles.memory}>
          <div className={styles.photoBox}>
            <span>PHOTO</span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>PROGRAMMING</p>
            <h2>My Programming Projects</h2>
            <p>
              Throughout my studies, I have worked on different
              programming and web development projects using
              Java, C++, HTML, CSS, and Next.js.
            </p>
            <span className={styles.date}>Projects & Learning</span>
          </div>
        </div>

        <div className={styles.memory}>
          <div className={styles.photoBox}>
            <span>PHOTO</span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>SPORTS</p>
            <h2>Volleyball</h2>
            <p>
              Volleyball is one of the sports I enjoy. It gives me
              an opportunity to stay active and spend time with others.
            </p>
            <span className={styles.date}>Personal Interest</span>
          </div>
        </div>

        <div className={styles.memory}>
          <div className={styles.photoBox}>
            <span>PHOTO</span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>ADVENTURE</p>
            <h2>Cycling & Motorcycle</h2>
            <p>
              I enjoy cycling, riding motorcycles, and exploring
              different places while creating new memories.
            </p>
            <span className={styles.date}>Hobbies & Adventures</span>
          </div>
        </div>

      </section>

      <a href="/" className={styles.back}>
        ← Back to Home
      </a>

    </main>
  );
}