import Restaurantcard from "./Restaurantcard";

const Cardcontainer =()=>{
     return(
            <>
            <div className="container d-flex justify-content-center  gap-4   ">
             <Restaurantcard
             imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p5pu4no5kwgf0pqokpkj"
             title="Natural Icecream" 
             starRating="4.5 "
             deliveryTime="30-35"
             cuisines="Choco-almond, Tender-coconut , Anjeer, Mango, Kesar Pista" 
             location="Ghatkopar East"></Restaurantcard>
             <Restaurantcard
             
             ></Restaurantcard>
             <Restaurantcard></Restaurantcard>
             <Restaurantcard></Restaurantcard>
             </div>
            </>
     );


};

export default Cardcontainer