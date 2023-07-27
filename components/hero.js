const Hero = ({ title, subtitle, imageOn = false }) => (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    {imageOn && <figure>[image]</figure>}
  </div>
);

export default Hero;
