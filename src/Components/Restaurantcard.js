import { FaRupeeSign } from "react-icons/fa";
const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  //const { imgUrl, title, starRating, deliveryTime, cuisines, location } = props;
  //console.log("props", props);
  return (
    <div className="main-div">
      <div className="custom-card ">
        <div className="mb-2 rounded-2 img-container">
          <img  src={imgUrl} 
            // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p5pu4no5kwgf0pqokpkj"
            // width="100%"
          ></img>
          <div className="text-on-img">50% OFF UPTO <FaRupeeSign fontSize={"15px"} />100</div>
        </div>
        <div className="px-4">
          <h5 className="title">{title}</h5>
          {/* {<h5>Natural Icecream</h5>} */}
          <div className="d-flex justify-content-centre">
            <div className="ratings">⭐{starRating}</div>
            {/* {<div>⭐4.5 </div>} */}
            <div className="delivery ms-2">{deliveryTime}mins</div>
            {/* {<div className="ms-3">30-35min</div>} */}
          </div>
          <div className="cuisines">{cuisines}</div>
          {/* {<div>Choco-almond, Tender-coconut , Anjeer, Mango, Kesar Pista</div>} */}
          <div className="location">{location}</div>
          {/* {<div>Ghatkopar East</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Restaurantcard;
