import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="text-center p-10 bg-yellow-500 text-white">
      <h1 className="text-5xl font-bold">Tasty Wheels</h1>
      <p className="mt-4 text-lg">Fresh, Fast, & Delicious!</p>
      <Button text="View Menu" />
    </section>
  );
};

export default Hero;