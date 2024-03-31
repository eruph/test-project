import React from 'react'; 
import '../Header/Header.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = ({state}) => {
  return(
    <div className="header">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none'}}>
          <h1 className="header-title">QPICK</h1>
        </Link>
      </div>
      <div className="right">
        <Navbar state = {state}/>
      </div>
    </div>
);
};
export default Header;