import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <div style={{ fontSize: "20px", fontWeight: "bolder", color: "grey" }} className="nav-wrapper pink lighten-4">
        <img style={{ verticalAlign: "middle" }} src="https://img.icons8.com/ios/50/fa314a/international-food.png" />
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="food-stories">Food Stories</Link></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/About-me">About Me </Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar