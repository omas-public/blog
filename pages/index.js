import Hero from 'components/hero'

const Home = props => (
  <>
    <Hero {...props} />
  </>
)

export const getStaticProps = async context => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: true
  }
})

export default Home
