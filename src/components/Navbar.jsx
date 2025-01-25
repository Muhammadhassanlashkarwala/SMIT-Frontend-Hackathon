
const Navbar = () => {
    return (
            <nav style={{background : "#1D4340"}} className=" items-center text-white p-6 flex justify-around">
                <div>
                   <h1 className="text-3xl">Saylani Finance</h1>
                </div>
            <ul className="flex space-x-4">
                <li><a href="/">Home </a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Pages </a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <button className="border-1 px-6 text-1.5xl py-2 bg-white" style={{color: "#1D4340", borderRadius: "10px", border:"none "}}>Apply Now</button>
        </nav>
    );
};

export default Navbar;