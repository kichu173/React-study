import { IMG_CDN_URL } from "../constants";

// restaurant card - functional component
// passing dynamic data(restaurantList data).
// parameter props here is receiving the data sent by Body Components - RestaurantCard props.
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL +
                cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestaurantCard;