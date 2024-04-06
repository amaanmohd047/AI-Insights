const SectionHeading = ({ children, color = "" }) => {
  return (
    <h1
      className={`text-center mt-28 mb-16 font-semibold font-heading text-[3rem] text-${
        color ? color : "blue-950"
      } `}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
