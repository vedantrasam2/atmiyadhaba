import Cardcontainer from "./Cardcontainer";
import Carousel from "./carousel";
import Filters from "./filter";
import Searchbar from "./searchbar";

const Body =() =>{
    return(
       <>
         <div className="text-center"></div>
       <Carousel></Carousel>
       <div>
       <Filters></Filters>
       <Searchbar></Searchbar>
       </div>
      <Cardcontainer></Cardcontainer>
       </>
    );
 }
 
 export default Body