import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
    <header>        
        <span className={styles.name}>Ville Taskinen</span> is a cognitive science master's student focusing on user experience and UI design.
    </header>
    <section className={styles.projects}>
        <h2>Projects</h2>
    </section>
  </Layout> 
  )
}
