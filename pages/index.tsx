import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <span className={styles.name}>Ville Taskinen</span> is a cognitive science master's student focusing on user experience and UI design.
      </header>
      <div className={styles.subtitle}>
        <h2>Projects</h2>
        </div>
      <section className={styles.projects}>

        <div className={styles.project} />
      </section>
    </Layout>
  )
}
