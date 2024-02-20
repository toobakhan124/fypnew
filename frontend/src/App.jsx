import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostAnimal from './components/Job/PostAnimal';
import Adoption from "./components/Adoption/Adoption";
import Admin from "./components/Admin/Admin";
import AdminUser from "./components/Admin/AdminUser";
import RescueRequest from "./components/Admin/RescueRequest";
const App = () => {
  const { isAuthorized, setIsAuthorized, setUser, setAuthToken } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setAuthToken(response.data.token);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/rescue" element={<PostAnimal />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<AdminUser />}></Route>
            <Route path="rescue-request" element={<RescueRequest />}></Route>
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
