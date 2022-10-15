import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Userlogin()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Registration Page</h1>
           <div>
             <input type="text" placeholder="Voter id(ex:abc1234)" className="name"/>
           </div>

           <div className="second-input">
             <input type="password" placeholder="password" className="name"/>
           </div>

           <div className="third-input">
             <input type="password" placeholder="conform password" className="name"/>
           </div>
          <div className="login-button">
          <Link to="/Voterid"><button>Register</button></Link>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}
export default Userlogin;




