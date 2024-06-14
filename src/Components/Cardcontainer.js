import Restaurantcard from "./Restaurantcard";

const Cardcontainer =()=>{
     const restaurantdata=[
          
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
               title:"Chinese Wok" ,
               starRating:"4.3 ",
               deliveryTime:"55-60",
               cuisines:"Chinese, Asian,Tibetan,Desserts", 
               location:"Santacruz East",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e2ej0ob56z47oylq9mkb",
               title:"UBQ BY Barbeque Nation" ,
               starRating:"3.9",
               deliveryTime:"35-40",
               cuisines:"North Indian, Barbecue", 
               location:"Bandra East",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e5f54df4ed8bac458b801ede76ee37d0",
               title:"La Pino'z Pizza" ,
               starRating:"4.5 ",
               deliveryTime:"40-45",
               cuisines:"Pizzas,Pastas,Italian,Desserts", 
               location:" LBS MARG Ghatkopar West",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nyudxonxnff3pptpoywr",
               title:"Barbeque Nation" ,
               starRating:"4",
               deliveryTime:"40-45",
               cuisines:"North Indian, Barbecue", 
               location:"Bandra East",
          },

          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
               title:"The Belgian Waffle " ,
               starRating:"4.5 ",
               deliveryTime:"40-45",
               cuisines:"Waffle,Desserts,Ice-cream", 
               location:"Santacruz East",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
               title:"McDonald's " ,
               starRating:"4.5 ",
               deliveryTime:"35-40",
               cuisines:"Burgers,Beverages,Cafe", 
               location:"Santacruz East",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
               title:"Domino's Pizza " ,
               starRating:"3.8",
               deliveryTime:"20-25",
               cuisines:"Pizzas,Pastas,Italian,Desserts", 
               location:"Kurla West",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f59b5c08-1812-4492-80c5-734a02ed7b0e_678581.JPG",
               title:"NH1 Bowls" ,
               starRating:"4.6",
               deliveryTime:"20-30",
               cuisines:"North Indian, Punjabi", 
               location:"Santacruz East",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9754bfa1-8366-4ccd-9a6e-fc74592ad711_825847.JPG",
               title:"Kwality Walls Frozen" ,
               starRating:"4.6",
               deliveryTime:"35-40",
               cuisines:"Ice Cream, Desserts", 
               location:"Kurla",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/apfvuiouttid0a5lpkin",
               title:"Jain Dugadhalay (sneh)" ,
               starRating:"4.7",
               deliveryTime:"30-35",
               cuisines:"Sweet,Bengali,Desserts", 
               location:"Ghatkopar West",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/37ee9788fd12e1e4e7cbe4b47c67e4e5",
               title:"Gupta Kulfi & Ice Cream" ,
               starRating:"4.6",
               deliveryTime:"35-40",
               cuisines:"Ice Cream, Desserts", 
               location:"Ghatkopar Vikhroli",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zypucskqmokptqfj5hib",
               title:"Neo Welcome Restaurant" ,
               starRating:"4.5",
               deliveryTime:"30-35",
               cuisines:"North Indian,Chinese", 
               location:"Ghatkopar West",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/d90c8be6-d0e9-4930-9057-7fda0485b06c_689521.JPG",
               title:"MOJO Pizza-2X Toppings" ,
               starRating:"4.5",
               deliveryTime:"25-35",
               cuisines:"Pizzas,Pastas,Italian,Desserts", 
               location:"Near Tabela",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/81bf516c-205c-44b8-9bb2-74aa62529d26_692689.JPG",
               title:"WeFit-Protein Bowls" ,
               starRating:"4.6",
               deliveryTime:"25-35",
               cuisines:"Healthy Food,Salads", 
               location:"Malad West",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cf6280d32aefb59cc849ef81b39fd3fd",
               title:"Captain Sam's Pizza" ,
               starRating:"3.7",
               deliveryTime:"30-35",
               cuisines:"Pizzas,Italian", 
               location:"BKC",
          },
          {
               imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f59b5c08-1812-4492-80c5-734a02ed7b0e_678582.JPG",
               title:"ZAZA Mughal Biryani" ,
               starRating:"4.3",
               deliveryTime:"25-35",
               cuisines:"Biryani,North Indian", 
               location:"Kurla West",
          },
     ]
     return(
            <>
            <div className="container d-flex flex-wrap justify-content-center gap-4">
               {
                    restaurantdata.map((restaurant)=>{
                         return(   
                              <Restaurantcard
                              imgUrl={restaurant?.imgUrl}
                              title={restaurant?.title}
                              starRating={restaurant?.starRating}
                              deliveryTime={restaurant?.deliveryTime}
                              cuisines={restaurant?.cuisines} 
                              location={restaurant?.location}></Restaurantcard>
                         );
                    })
               }
             
             
             </div>
            </>
     );


};

export default Cardcontainer