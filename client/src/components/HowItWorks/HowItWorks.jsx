import SlideInWrapper from "../ui/SlideInWrapper";
import SectionHeading from "../ui/SectionHeading";
import ImageArea from "./ImageArea";
import TextArea from "./TextArea";

const HowItWorks = () => {
  return (
    <div id="howitworks" className="scroll-my-20 pt-4">
      <SectionHeading>How It Works</SectionHeading>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <SlideInWrapper direction="right">
            <TextArea>
              <TextArea.Heading>Data Collection</TextArea.Heading>
              <TextArea.Text>
                Collect data from various sources, including sensors, CRM
                systems, and online interactions, to build a comprehensive
                dataset.
              </TextArea.Text>
            </TextArea>
          </SlideInWrapper>

          <SlideInWrapper direction="left">
            <ImageArea src="how-it-works-collection.jpg" />
          </SlideInWrapper>

          <SlideInWrapper direction="right">
            <ImageArea src="how-it-works-analysis.jpg" />
          </SlideInWrapper>

          <SlideInWrapper direction="left">
            <TextArea>
              <TextArea.Heading>Data Analysis</TextArea.Heading>
              <TextArea.Text>
                Analyze the collected data using advanced algorithms and machine
                learning techniques to uncover valuable insights and patterns
              </TextArea.Text>
            </TextArea>
          </SlideInWrapper>

          <SlideInWrapper direction="right">
            <TextArea>
              <TextArea.Heading>Actions</TextArea.Heading>
              <TextArea.Text>
                Implement data-driven strategies, personalized recommendations,
                and proactive measures to optimize operations, improve
                decision-making, and enhance customer experiences
              </TextArea.Text>
            </TextArea>
          </SlideInWrapper>

          <SlideInWrapper direction="left">
            <ImageArea src="how-it-works-actions.jpg" />
          </SlideInWrapper>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
