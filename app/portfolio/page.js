import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <main className={styles.container}>

      <section className={styles.intro}>
        <p className={styles.label}>MY PORTFOLIO</p>

        <h1>Thristan Jake Muring</h1>

        <p className={styles.role}>
          BS Information Technology Student
        </p>

        <p className={styles.about}>
          I am a BSIT student who is interested in technology,
          programming, and web development. I enjoy learning new
          skills and creating projects that help me improve as a
          future IT professional.
        </p>
      </section>

      <section className={styles.content}>

        <div className={styles.card}>
          <p className={styles.cardLabel}>BACKGROUND</p>
          <h2>About Me</h2>
          <p>
            I am passionate about exploring technology and learning
            how different applications and websites are created.
            Through my studies and projects, I continue to develop
            my programming and problem-solving skills.
          </p>
        </div>

        <div className={styles.card}>
          <p className={styles.cardLabel}>EDUCATION</p>
          <h2>Holy Cross of Davao</h2>
          <p>
            Bachelor of Science in Information Technology
          </p>
          <span>BSIT Student</span>
        </div>

      </section>

      <section className={styles.skills}>
        <p className={styles.cardLabel}>TECHNICAL SKILLS</p>

        <h2>What I Work With</h2>

        <div className={styles.skillList}>
          <div className={styles.skill}>Java</div>
          <div className={styles.skill}>C++</div>
          <div className={styles.skill}>HTML / CSS</div>
          <div className={styles.skill}>Next.js</div>
        </div>
      </section>

      <a href="/" className={styles.back}>
        ← Back to Home
      </a>

    </main>
  );
}