import SectionHeading from "../ui/SectionHeading";

const Benefits = () => {
  return (
    <div className="pb-[100rem] pt-4" id="benefits">
      <SectionHeading>Why Choose Us</SectionHeading>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          <div className="p-6 bg-white text-center rounded-lg">
            <div className="w-1/2 m-auto mb-8">
              <img src="customer-satisfaction-image.png" />
            </div>
            <h2 className="text-xl font-semibold mb-4">
              Predictive Maintenance Solutions
            </h2>
            <p className="text-gray-600">
              Proactively monitor equipment health, predict failures, and
              optimize maintenance schedules to minimize downtime and maximize
              efficiency.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-xl font-semibold mb-4">
              Customer Behavior Analytics and Personalization
            </div>
            <div className="text-gray-600">
              Gain deep insights into customer behavior, preferences, and trends
              to deliver personalized experiences that foster customer loyalty
              and drive sales.
            </div>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="text-xl font-semibold mb-4">
              Customized AI Solutions and Consulting
            </div>
            <div className="text-gray-600">
              Harness the power of AI with tailored solutions and expert
              consulting services designed to address your unique business
              challenges and unlock new opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
