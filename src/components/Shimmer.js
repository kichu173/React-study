const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(15).fill("").map((e, index) => {
               return  <div className="shimmer-card" key={index}></div>
            })}
        </div>
    )
};

export default Shimmer;