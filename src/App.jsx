import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { Home } from "./Pages/Home";
import { AdminHeading } from "./Admin/AdminHeading";
import Dashboards from "./Admin/AdminComponents/Dashboard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CalculatorLoan } from "./components/CalculatorLoan";
// import RequestManager from "./Admin/AdminComponents/RequestManager";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<AdminHeading />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/admin" element={<AdminHeading />} />
        <Route path="/admindashboards" element={<Dashboards />} />
        {/* <Route
          path="/admindashboard/requestmanager"
          element={<RequestManager />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
