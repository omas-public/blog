import Hero from 'components/hero'

const Blog = props => {
  return (
    <>
      <Hero {...props} />
    </>
  )
}

export const getStaticProps = async context => ({
  props: {
    title: 'Blog',
    subtitle: 'Recent Posts'
  }
})

export default Blog
