import Hero from 'components/hero'

const Blog = props => (
  <>
    <Hero {...props} />
  </>
)

export const getStaticProps = async context => ({
  props: {
    title: 'Blog',
    subtitle: 'Recent Posts'
  }
})

export default Blog
