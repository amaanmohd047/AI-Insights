import Button from "./../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import FadeInWrapper from "../ui/FadeInWrapper";
import SlideInWrapper from "../ui/SlideInWrapper";

const CallToAction = () => {
  return (
    <div className="h-[70vh] bg-gradient-to-b from-blue-950 to-indigo-950 p-10 ">
      <SlideInWrapper direction="left">
        <SectionHeading color="white">
          Ready to Unlock Your Business Potential?
        </SectionHeading>
      </SlideInWrapper>

      <FadeInWrapper>
        <div className="w-[60%] m-auto">
          <h1 className="text-gray-200 text-center text-2xl font-heading-sans">
            Start your journey towards data-driven success today. Request a demo
            or get in touch with our experts to learn more
          </h1>
        </div>
      </FadeInWrapper>

      <FadeInWrapper>
        <div className=" mt-10 w-full flex justify-center">
          <Button type="secondary" >Get In Touch</Button>
        </div>
      </FadeInWrapper>
    </div>
  );
};

export default CallToAction;
