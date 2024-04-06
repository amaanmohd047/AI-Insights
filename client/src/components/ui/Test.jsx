function Button({ children, className }) {
  return (
    <button
      className={`justify-center items-center px-16 py-4 w-full rounded-[51px] max-md:px-5 max-md:max-w-full max-md:text-4xl ${className}`}
    >
      {children}
    </button>
  );
}

function MyComponent() {
  const buttons = [
    { text: "Log In", className: "text-white bg-slate-500" },
    { text: "Log In", className: "mt-9 bg-indigo-200 text-neutral-600" },
  ];

  return (
    <div className="flex flex-col text-9xl font-medium text-center max-w-[654px] max-md:text-4xl">
      {buttons.map((button, index) => (
        <Button key={index} className={button.className}>
          {button.text}
        </Button>
      ))}
    </div>
  );
}

const Test = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default Test;
