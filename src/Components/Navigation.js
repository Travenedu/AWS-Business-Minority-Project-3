// This folder holds components and logic for navigating around the application,
// like menus, links, and route setups

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
    return (
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/authentication">Authentication</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;