import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
