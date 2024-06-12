import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsBag } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header=()=>{
    return(
      <ul class="nav  justify-content-center py-3.5 shadow p-3 mb-5 bg-white rounded ">
        <FaBowlFood fontSize={"40px"} />
      <li class="nav-item ">
        
        <a class="pt-1 mx-3 nav font" href="#">AKSHAR FOODS </a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link " href="#">Other</a>npm
      </li> */}
      <li class="nav-item">
        <a class= " ms-5 ps-5 pt-2 nav font1 d-flex align-items-center gap-1" href="#" ><BsBag fontSize={"20px"}/> Akshar Corporate</a>
      </li>
      <li class="nav justify-content-center">
        <a class="pt-1 ms-5 ps-4 nav d-flex align-items-center gap-1" href="#"><FaSearch fontSize={"20px"}/>Search</a>
      </li>
      <li class="nav-item">
        <a class="pt-2 ms-5 ps-4 nav d-flex align-items-center gap-1" href="#"> <BiSolidOffer fontSize={"20px"} />Offers</a>
      </li>
      <li class="nav-item">
        <a class="pt-2 ms-5 ps-4 nav d-flex align-items-center gap-1" href="#"><IoMdHelpCircleOutline fontSize={"20px"}/>Help</a>
      </li>
      <li class="nav-item">
        <a class="pt-2 ms-5 ps-4 nav d-flex align-items-center gap-1" href="#"><MdOutlineAssignmentInd fontSize={"20px"}/>Sign In</a>
      </li>
      <li class="nav-item">
        <a class="pt-2 ms-5 ps-3 nav d-flex align-items-center gap-1" href="#"><MdOutlineShoppingCart fontSize={"20px"}/>Cart</a>
      </li> 
    </ul>
    );

}

export default Header