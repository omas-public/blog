import Container from 'components/container'
import Hero from 'components/hero'

const Blog = props => (
  <Container>
    <Hero {...props} />
  </Container>
)

export const getStaticProps = async context => ({
  props: {
    title: 'Blog',
    subtitle: 'Recent Posts'
  }
})

export default Blog
