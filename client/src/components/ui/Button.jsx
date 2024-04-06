const Button = ({ children, type = "primary", ...props }) => {
  let styles;
  if (type === "primary")
    styles =
      "bg-blue-900 rounded-md hover:bg-blue-950 font-sans text-base text-white py-3 px-5 transition-all duration-300 hover:scale-[1.02]";
  if (type === "scondary") styles = "";

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export default Button;
