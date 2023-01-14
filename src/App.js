import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/Signup.jsx";
import Recover from "./screens/Recover.jsx";
import Profile from "./screens/Profile.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          </Helmet>
          <Landing />
        </>

      } />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Recover" element={<Recover />} />
      <Route path="/Profile" element={<Profile />} />


    </Routes>

  )
}

