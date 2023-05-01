import React, {useState} from "react";
import Logo from "./logo.jsx"
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
      
      <input type="text" className="LoginInput" placeholder="email-id" />
      <input type="text" className="LoginInput" placeholder="password" />
      <button className="LoginButton"
        style={{ backgroundColor: isMousedOver ? "white" : null, color: isMousedOver? "#4c3a8d": "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Login
      </button>
      <p>Don't have an account?Sign up here </p>
    </div>
    
    </div>
    
    
}

export default Login;