import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Container() {
  const [user,setuser] = useState(
    [
      {
        username:"Rajguru",
        password:"rajguru@2105"
      }
    ]
  )
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setuser={setuser}/>}></Route>
      <Route path="/Signup" element={<Signup  user={user} setuser={setuser}/>}></Route>
      <Route path="/Landing" element={<App/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
root.render(
<div>
  <Container/>
</div>);
