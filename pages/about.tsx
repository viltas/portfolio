import styles from '../styles/about.module.css'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <div>
                <section className={styles.header}>
                    <h1>Who am I?</h1>
                </section>
                <section>
                    <section className={styles.content}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor vestibulum nisi vitae malesuada. Donec commodo interdum dui eu luctus. Nam erat tortor, mattis quis congue ac, dictum quis ex. Morbi in velit eu diam condimentum bibendum. Cras eu ex at enim elementum sodales condimentum ac neque. Vivamus at suscipit velit. Maecenas eu quam quis mauris semper pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor vestibulum nisi vitae malesuada. Donec commodo interdum dui eu luctus. Nam erat tortor, mattis quis congue ac, dictum quis ex. Morbi in velit eu diam condimentum bibendum. Cras eu ex at enim elementum sodales condimentum ac neque. Vivamus at suscipit velit. Maecenas eu quam quis mauris semper pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor vestibulum nisi vitae malesuada. Donec commodo interdum dui eu luctus. Nam erat tortor, mattis quis congue ac, dictum quis ex. Morbi in velit eu diam condimentum bibendum. Cras eu ex at enim elementum sodales condimentum ac neque. Vivamus at suscipit velit. Maecenas eu quam quis mauris semper pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </section>
                </section>
            </div>
        </Layout>
    )
}
