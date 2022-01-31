import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 h-screen">
        <div className="relative bg-hero bg-center bg-cover min-h-screen">
          <Navigation />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
