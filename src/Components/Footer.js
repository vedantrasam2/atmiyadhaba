import { FaBowlFood } from "react-icons/fa6";




const Footer=()=>{
    return(
       <div class="footer">
       <div class="first-block">
       <div class="one">
       <FaBowlFood fontSize={"30px"} color="white" />
       <h5 class="foods">AKSHAR FOODS</h5> 
       </div>
       <div class="pvt">
         <p>Jangal Mangal Road Bhandup</p>
         <p>Pvt.Ltd</p>
       </div>
       </div>
       <div class="second-block">
        <h5 class="company">Company</h5>
       <div class="box">
       <a href="" class="about">About</a>
        <a href="" class="about">Careers</a>
        <a href="" class="about">Team</a>
        <a href="" class="about">Akshar One</a>
        <a href="" class="about">Akshar Instamart</a>
        <a href="" class="about">Akshar Genie</a>
       </div>
       </div>

       <div class="third-block">
        <h5 class="company">Contact us</h5>
        <div class="box">
        <a href="" class="about">Help & Support </a>
        <a href="" class="about">Partner with us</a>
        <a href="" class="about">Ride with us</a>
        </div>

        <h5 class="fourth-block">Legal</h5>
        <div class="box">
        <a href="" class="about">Terms & Conditions</a>
        <a href="" class="about">Cookie Policy</a>
        <a href="" class="about">Privacy Policy</a>
        <a href="" class="about">Investor Relations</a>
        </div>
       </div>
       <div class="fifth-block">
        <h5 class="company">We deliver to:</h5>
        <div className="box">
        <a href="" class="deliver">Bangalore</a>
        <a href="" class="deliver">Gurgaon</a>
        <a href="" class="deliver">Hyderabad</a>
        <a href="" class="deliver">Delhi</a>
        <a href="" class="deliver">Mumbai</a>
        <a href="" class="deliver">Pune</a>

        </div>
       </div>
       
       
       </div>
       
    );
  }
   
  export default Footer