import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import LearnCSS from "./pages/LearnCSS";
import Logout from "./pages/Logout";
import TableReact from "./pages/TableReact";
import CartPage from "./pages/Cart";
import UserPage from "./pages/UserPage/userpage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
//import axios from "axios";

const App_router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="/learncss" element={<LearnCSS />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/tablereact" element={<TableReact />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={App_router}></RouterProvider>;
}

export default App;

/*
  const idToken = localStorage.token;
  if (idToken) {
   console.log("idToken : ", idToken);
    alert(`idtoken : ${idToken}`);
      let authtoken = idToken;
      axios.post("http://localhost:3000/authtoken",{},
      {
        headers: {
           authtoken,
        }
      }).then((response)=> {
      console.log("response.data");
       make dispatch function 
   }).catch((error)=>{
      console.log(error);
   })
  }
*/
