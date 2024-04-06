import SectionHeading from "../ui/SectionHeading";
import Card from "./Card";
import IndexedFadeInWrapper from "../ui/IndexedFadeInWrapper";
import CallToAction from "./CallToAction";

const Benefits = () => {
  return (
    <>
      <div className="pt-4" id="benefits">
        <SectionHeading>Why Choose Us</SectionHeading>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            <IndexedFadeInWrapper index={1}>
              <Card>
                <Card.Image src="cogwheels-gear.png" />
                <Card.Heading>Increase Efficiency</Card.Heading>
                <Card.Text>
                  Optimize resource allocation, streamline processes, and reduce
                  costs by identifying inefficiencies and maximizing operational
                  efficiency.
                </Card.Text>
              </Card>
            </IndexedFadeInWrapper>

            <IndexedFadeInWrapper index={3}>
              <Card>
                <Card.Image src="accuracy-dartboard.png" />
                <Card.Heading>Improve Accuracy</Card.Heading>
                <Card.Text>
                  Make informed decisions backed by accurate forecasts,
                  predictive analytics, and actionable insights, resulting in
                  improved business outcomes and higher ROI.
                </Card.Text>
              </Card>
            </IndexedFadeInWrapper>

            <IndexedFadeInWrapper index={5}>
              <Card>
                <Card.Image src="customer-satisfaction-image.png" />
                <Card.Heading>Enhance Customer Satisfaction</Card.Heading>
                <Card.Text>
                  Deliver personalized experiences, tailored recommendations,
                  and exceptional customer service to delight customers, foster
                  brand loyalty, and drive repeat business.
                </Card.Text>
              </Card>
            </IndexedFadeInWrapper>
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Benefits;
