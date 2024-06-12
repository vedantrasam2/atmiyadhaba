const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  //const { imgUrl, title, starRating, deliveryTime, cuisines, location } = props;
  //console.log("props", props);
  return (
    <div>
      <div className="custom-card ">
        <div className="mb-1 rounded-2">
          <img src={imgUrl}
            // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p5pu4no5kwgf0pqokpkj"
            // width="100%"
          ></img>
        </div>
        <div className="px-2">
          <h5>{title}</h5>
          {/* {<h5>Natural Icecream</h5>} */}
          <div className="d-flex justify-content-centre">
            <div>⭐{starRating}</div>
            {/* {<div>⭐4.5 </div>} */}
            <div className="ms-3">{deliveryTime}min</div>
            {/* {<div className="ms-3">30-35min</div>} */}
          </div>
          <div>{cuisines}</div>
          {/* {<div>Choco-almond, Tender-coconut , Anjeer, Mango, Kesar Pista</div>} */}
          <div>{location}</div>
          {/* {<div>Ghatkopar East</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Restaurantcard;
