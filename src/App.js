import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Classes from "./Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "./Pages/Error/Error";
import Footer from "./Component/Footer/Footer";
import About from "./Pages/About/About";
import ClassesDetails from "./Pages/ClassesDetails/ClassesDetails";
import Trainers from "./Pages/Trainers/Trainers";
import Review from "./Pages/Review/Review";
import Pricing from "./Pages/Pricing/Pricing";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route
            path="/classes-details/:id"
            element={
              <PrivateRoute>
                <ClassesDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/review" element={<Review />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
export default App;
