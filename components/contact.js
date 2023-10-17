import styles from 'styles/contact.module.css'

const Contact = ({ title, mail }) => (
  <div className={styles.stack}>
    <h3 className={styles.heading}>{title}</h3>
    <address>{mail}</address>
  </div>
)

export const getStaticProps = async context => ({
  props: {
    title: 'Contact',
    mail: 'cube@webmail.address'
  }
})

export default Contact
