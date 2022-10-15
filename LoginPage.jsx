import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
function LorA()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Select Login</h1>
	<div className="Button">
          <Link to="/Userlogin"><button>User</button></Link>

          <Link to="/Adminloginpage"><button>Admin</button></Link>
          </div>
	</div>
	</div>
	</div>
	</div>
);
}
export default LorA;
