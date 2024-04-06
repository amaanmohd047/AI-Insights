const TextArea = ({ children }) => {
  return (
    <div className="p-10 pt-20 h-full bg-white rounded-lg font-heading-sans">
      {children}
    </div>
  );
};

const Heading = ({ children }) => {
  return (
    <h2 className="text-indigo-950 text-2xl font-semibold mb-4">{children}</h2>
  );
};

const Text = ({ children }) => {
  return <p className="text-gray-600 text-lg tracking-normal">{children}</p>;
};

TextArea.Text = Text;
TextArea.Heading = Heading;

export default TextArea;
