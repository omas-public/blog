import Container from 'components/container'
import Hero from 'components/hero'

const Home = props => (
  <Container>
    <Hero {...props} />
  </Container>
)

export const getStaticProps = async context => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: true
  }
})

export default Home
