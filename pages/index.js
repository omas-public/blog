import Hero from 'components/hero'

const Home = () => {
  return (
    <>
      <Hero {...params} />
    </>
  )
}

export const getStaticProps = async context => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: true
  }
})

export default Home
