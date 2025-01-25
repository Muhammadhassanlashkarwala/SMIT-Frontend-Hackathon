import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CalculatorLoan } from "../components/CalculatorLoan";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[url(https://www.radiustheme.com/demo/wordpress/themes/finwave/wp-content/uploads/2024/09/h7_slider_01-min-scaled.jpg)] pl-42 pt-45"
      >
        <h1 className=" text-yellow-500 font-bold text-1.5xl">
          Top Financial Advisor
        </h1>
        <h1 className="text-white text-6xl font-bold mr-2">
          Grow Up Your Business <br /> With Finance Audit
        </h1>
        <p className="text-white mt-6 ml-2 font-semibold">
          A good strategy is a strategy that can succesfull lead <br /> the
          business in a more developed direction.
        </p>
        <button
          className="px-8 text-1.5xl py-4 bg-yellow-500 text-black font-semibold mt-4 text-1.8xl"
          style={{ borderRadius: "6px" }}
        >
          Contact With Us
        </button>
      </div>
      <CalculatorLoan />
      <Footer />
    </div>
  );
};
