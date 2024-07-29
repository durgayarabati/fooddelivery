import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import prasadImagef from '../../assets/prasadv.png'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleMenuClick = (menuName, route) => {
    setMenu(menuName);
    navigate(route);
  };
  const handleBasketClick = () => {
    setMenu(""); 
    navigate('/cart');
  };
  const handlehomeimgClick = () => {
    setMenu("home"); 
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to="/" ><img className='prasad-img' src={prasadImagef} alt="Prasad" onClick={()=>handlehomeimgClick()} /></Link>
      <ul className="navbar-menu">
        <li onClick={() => handleMenuClick("home", "/")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => handleMenuClick("menu", "/menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => handleMenuClick("mobile-app", "/mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => handleMenuClick("contact-us", "/contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt='' onClick={handleBasketClick} /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
