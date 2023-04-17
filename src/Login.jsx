import React, {useState} from "react";
import Logo from "./logo.jsx"
import { Link } from "react-router-dom";
function Login(){
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClick()
  {
    setMouseOver(true);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
    return <div className="column">
    <Logo /> 
    <div className="container">
      <h2>Login</h2>
      <br></br>
      
      <input type="text" placeholder="email-id" />
      <input type="text" placeholder="password" />
      <button
        style={{ backgroundColor: isMousedOver ? "white" : null, color: isMousedOver? "#4c3a8d": "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Login
      </button>
    </div>
    <p>Don't have an account?<Link to="/signup">Sign up here</Link> </p>
    </div>
    
    
}

export default Login;