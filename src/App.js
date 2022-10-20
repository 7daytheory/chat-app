import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
