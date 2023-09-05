import SkeletonCard from "./SkeletonCard";

const ShimmerUI = () => {
  return (
    <div className="card_container">
      {Array(9)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index}>
              <SkeletonCard />
            </div>
          );
        })}
    </div>
  );
};

export default ShimmerUI;
