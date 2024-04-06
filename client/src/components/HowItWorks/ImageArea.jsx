const ImageArea = ({ src }) => {
  return (
    <div className="bg-indigo-50 rounded-lg">
      <img
        src={src}
        alt="Integration"
        className="object-cover h-full w-full rounded-lg mb-4"
      />
    </div>
  );
};

export default ImageArea;
