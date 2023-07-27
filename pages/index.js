import Hero from "components/hero";

const params = {
  title: "CUBE",
  subtitle: "アウトプットしていくサイト",
  imageOn: true,
};
const Home = () => {
  return (
    <>
      <Hero {...params} />
    </>
  );
};

export default Home;
