import Layout from 'components/layout'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
