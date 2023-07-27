import Hero from "components/hero";

const params = {
  title: "About",
  subtitle: "About developement activities",
};

const About = () => {
  return (
    <>
      <Hero {...params} />
    </>
  );
};

export default About;
