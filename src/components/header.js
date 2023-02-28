import React, {useState} from "react";
import "./style.css";
import Logo from "../assets/image/logo.svg";
import Menu from "../assets/image/menu.png";
import CloseButton from "../assets/image/close.svg";
import { Button } from "react-bootstrap";
import { logout } from "../store/actions/actions-slice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";

const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate ()
  const openSidebar = () => {
    setActive(true);
  };
  const closeButton = () => {
    setActive(false);
  };
  const isTokenExist = localStorage.getItem('access_token')
  const dispatch = useDispatch()
  const handlelogout =() =>{
    dispatch(logout())
    navigate('/login')
  
    
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={Logo} alt="logo saya" loading="lazy" />
          </div>
          <div className={`overlay-bg ${active ? "menu-active" : ""}`}>
          </div>
          <div
            className={`sidebar ${active ? "menu-active" : ""}`}
            onClick={closeButton}
          >
            <div className="top-sidebar">
              <h3>BCR</h3>
              <div className="close-icon">
                <img src={CloseButton} alt="" loading="lazy" />
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#Why">Why Us</a>
              </li>
              <li>
                <a href="#Testi">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
                {
                  isTokenExist?<Button className="btn btn-danger m-2" onClick={handlelogout}>Logout</Button>
                  :<a href="/register"><Button className="btn btn-success m-2">Register</Button></a>
                }
              
              
            </ul>
           
          </div>

          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
