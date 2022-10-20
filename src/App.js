import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/">
            <Route index 
            element={<ProtectedRoute>
              <Home />
              </ProtectedRoute>} 
              />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
