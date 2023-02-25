import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Header from "./Frontend/Components/Header";
import Footer from "./Frontend/Components/Footer";
import { AuthContext } from "../context/AuthContext";
import PrivateRoutes from "../components/PrivateRoutes";
export default function Index() {
  const {isAuthenticated} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Frontend />} />
          <Route path="/auth/*" element={!isAuthenticated ? <Auth/>: <Navigate to='/dashboard' />} />
          <Route path="/dashboard/*" element={<PrivateRoutes Component={Dashboard}/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
