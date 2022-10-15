import './App.css';
import React from 'react';
import{Link} from "react-router-dom";
function Voterid(){
  return (
    <div className="main">
     <div className="sub-main">
	<div>
           <h1>Voter ID</h1>
           <div>
             <input type="password" placeholder="(Ex.ADC12345)" className="name"/>
           </div>

           <div>
             <input type="password" placeholder="password" className="name"/>
           </div>
           
           <div>
             <input type="password" placeholder="otp(sent to mobile)" className="name"/>
           </div>
           <p className="link">
              <Link to="/GoToVote"><button>Go to vote</button></Link>
            </p>
       </div>
    </div>
    </div>
);
}
export default Voterid;