const Shimmer = () => {
  return (
    <div className="m-10 grid gap-4 grid-rows-5 lg:grid-cols-4 md:grid-cols-4 lg:mt-24">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            className="bg-gradient-to-r from-slate-200 via-gray-300 to-slate-200 h-64 w-60 animate-shimmer"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
