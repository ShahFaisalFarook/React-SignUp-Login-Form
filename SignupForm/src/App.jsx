import React, { useState } from "react"; 
import Login from "./Login"; 
import Signup from "./Signup"; 
import "./App.css"; 

function App() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="app-container">
      <h1>Welcome to Our Platform</h1>
      <div className="form-toggle">
        <button
          className={isLogin ? "active" : ""} 
          onClick={() => setIsLogin(true)} 
        >
          Login
        </button>
        <button
          className={!isLogin ? "active" : ""} 
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>
     
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
