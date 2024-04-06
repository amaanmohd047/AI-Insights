const SectionHeading = ({ children, color = "" }) => {
  return (
    <h1
      className={`text-center mt-24 mb-12 font-semibold font-heading text-[3rem] text-${
        color ? color : "blue-950"
      } `}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
