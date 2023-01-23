import { useState } from "react";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login/Login";

import "./style/reset.css";
import "./style/index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div className="wrapper">
      {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
