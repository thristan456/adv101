import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.container}>

      <section className={styles.hero}>
        <p className={styles.label}>ABOUT ME</p>

        <h1>Hi, I'm Thristan.</h1>

        <p className={styles.intro}>
          I am a BS Information Technology student who is passionate
          about technology, programming, and learning new things.
          I enjoy creating projects, exploring different technologies,
          and improving my skills through experience.
        </p>
      </section>

      <section className={styles.sectionGrid}>

        <div className={styles.card}>
          <p className={styles.cardLabel}>WHY BSIT?</p>
          <h2>My Program</h2>

          <p>
            I chose Bachelor of Science in Information Technology
            because I am interested in computers, programming, and
            how technology is used to create useful applications
            and websites.
          </p>

          <div className={styles.highlight}>
            <span>Current Program</span>
            <strong>BS Information Technology</strong>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.cardLabel}>SCHOOL BACKGROUND</p>
          <h2>My Education</h2>

          <div className={styles.education}>
            <h3>Davao City National High School</h3>
            <p>Senior High School Graduate</p>
            <span>Batch 2024–2025</span>
          </div>

          <div className={styles.education}>
            <h3>Holy Cross of Davao</h3>
            <p>Bachelor of Science in Information Technology</p>
            <span>Current Student</span>
          </div>
        </div>

      </section>

      <section className={styles.skillsSection}>
        <p className={styles.cardLabel}>TECHNICAL SKILLS</p>

        <h2>What I Know</h2>

        <div className={styles.skills}>
          <div className={styles.skill}>Java</div>
          <div className={styles.skill}>C++</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>Next.js</div>
          <div className={styles.skill}>Web Development</div>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <p className={styles.cardLabel}>HOBBIES & INTERESTS</p>

        <h2>Things I Enjoy</h2>

        <p className={styles.hobbyIntro}>
          Outside of school and programming, I also enjoy spending
          my free time doing different activities and exploring
          things that I enjoy.
        </p>

        <div className={styles.hobbies}>
          <div className={styles.hobby}>
            <span>🎬</span>
            <h3>Movies & Anime</h3>
            <p>I enjoy watching movies and anime during my free time.</p>
          </div>

          <div className={styles.hobby}>
            <span>🏐</span>
            <h3>Volleyball</h3>
            <p>I enjoy playing volleyball and staying active.</p>
          </div>

          <div className={styles.hobby}>
            <span>🚲</span>
            <h3>Cycling</h3>
            <p>Cycling is one of the activities I enjoy for fun and adventure.</p>
          </div>

          <div className={styles.hobby}>
            <span>🏍️</span>
            <h3>Motorcycle</h3>
            <p>I enjoy motorcycles and exploring different places.</p>
          </div>

          <div className={styles.hobby}>
            <span>🌄</span>
            <h3>Adventure</h3>
            <p>I enjoy discovering new places and experiencing new adventures.</p>
          </div>
        </div>
      </section>

      <a href="/" className={styles.back}>
        ← Back to Home
      </a>

    </main>
  );
}