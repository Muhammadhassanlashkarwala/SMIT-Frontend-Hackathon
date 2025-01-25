import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { Home } from "./Pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CalculatorLoan } from "./components/CalculatorLoan";
import { AdminHeading } from "./Admin/AdminHeading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<AdminHeading />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
