const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="Shimmer-card" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
