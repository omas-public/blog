import Hero from 'components/hero'

const About = props => (
  <>
    <Hero {...props} />
  </>
)

export const getStaticProps = async context => ({
  props: {
    title: 'About',
    subtitle: 'About developement activities'
  }
})

export default About
