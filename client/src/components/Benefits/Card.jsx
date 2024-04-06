const Card = ({ children }) => {
  return <div className="p-6 bg-white text-center rounded-lg">{children}</div>;
};

const Image = ({ src }) => {
  return (
    <div className="w-1/2 m-auto mb-8">
      <img src={src} />
    </div>
  );
};

const Heading = ({ children }) => {
  return (
    <h2 className="text-xl text-indigo-950 font-semibold mb-4">{children}</h2>
  );
};

const Text = ({ children }) => {
  return <p className="text-gray-600"> {children} </p>;
};

Card.Image = Image;
Card.Heading = Heading;
Card.Text = Text;

export default Card;
