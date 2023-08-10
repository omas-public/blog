import Hero from 'components/hero'

const About = () => {
  return (
    <>
      <Hero {...params} />
    </>
  )
}

export const getStaticProps = async context => ({
  props: {
    title: 'About',
    subtitle: 'About developement activities'
  }
})

export default About
