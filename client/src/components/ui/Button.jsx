const Button = ({ children, type = "primary", ...props }) => {
  if (type === "secondary")
    return (
      <button
        className="bg-blue-950 py-3 px-6 text-white rounded-md border-white border-2 curson-pointer hover:text-blue-950 hover:bg-white transition-all duration-200 ease-in-expo hover:border-2 hover:border-blue-950 active:bg-blue-950 active:text-white"
        {...props}
      >
        {children}
      </button>
    );
  else {
    return (
      <button
        className="hover:bg-indigo-950 py-3 px-6 hover:text-white rounded-md hover:border-indigo-950 curson-pointer text-indigo-950 bg-white transition-all duration-200 ease-in-expo hover:border-2 border-2 border-indigo-950 active:text-indigo-950 active:bg-white"
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;
