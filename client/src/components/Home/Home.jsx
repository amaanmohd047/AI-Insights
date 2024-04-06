import Button from "../ui/Button";
import FadeInWrapper from "../ui/FadeInWrapper";
import Blob from "./Blob";

const Home = () => {
  return (
    <main
      id="home"
      className="h-[90vh] w-full bg-white relative overflow-hidden"
    >
      <article className="absolute left-0 top-1/4 flex flex-col h-full w-[50%] z-10 ml-32">
        <FadeInWrapper>
          <h1 className="text-5xl font-bold tracking-tighter leading-tight text-blue-950">
            Transform Your Business <br />
            with Data-Driven Insights{" "}
          </h1>
        </FadeInWrapper>
        <FadeInWrapper>
          <h3 className="text-3xl font-bold tracking-tight text-wrap my-8 text-slate-600 leading-8">
            Transform Your Operations, Enhance Customer Experiences, and Drive
            Growth
          </h3>
        </FadeInWrapper>
        <FadeInWrapper>
          <Button type="primary">Get Started</Button>
        </FadeInWrapper>
      </article>
      <article>
        <div className="relative h-full w-full ml-[25vw] z-[-10px]">
          <Blob />
        </div>
          <div>
            <img
              src="/hero-image.png"
              alt="hero image"
              className="h-4/5 w-auto absolute right-0 bottom-10"
              />
          </div>
      </article>
    </main>
  );
};

export default Home;
