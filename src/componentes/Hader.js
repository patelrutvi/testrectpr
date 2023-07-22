import React from 'react';
import { Link } from 'react-router-dom';

function Hader(props) {
  return (
    <div>
      <nav id="navbar" >
        <ul >
          <li><Link  to={"/"}>Home</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/course'}>Course</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Hader;