import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./Pages/Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import User from "./user/userComponents/UserLayout";
import WeddingLoans from "./user/userComponents/WeddingLoans";
import ConstructionLoans from "./user/userComponents/ConstructionLoan";
import EducationalLoan from "./user/userComponents/EducationalLoan";
import BusinessLoan from "./user/userComponents/BusinessLoan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/weddingloans" element={<WeddingLoans />}></Route>
          <Route
            path="/constructionloans"
            element={<ConstructionLoans />}
          ></Route>
          <Route path="/bussinessloans" element={<BusinessLoan />}></Route>
          <Route path="/educationloans" element={<EducationalLoan />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
