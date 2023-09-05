import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="card">
      <div className="restuarant_image bgcolor">
        {/* <Skeleton className="restuarant_image" /> */}
      </div>
      <div className="restuarant_info">
        <h1 className="restuarant_name bgcolor">
          {/* <Skeleton className="restuarant_name" /> */}
        </h1>
        <span className="restuarant_rating">
          <h1 className="rating bgcolor">
            {/* <Skeleton className="rating" /> */}
          </h1>
        </span>
        <h1 className="restuarant_cuisine">
          {/* <Skeleton className="restuarant_cuisine" /> */}
        </h1>

        <h1 className="restuarant_locality">{/* <Skeleton /> */}</h1>
      </div>
    </div>
  );
};

export default SkeletonCard;
