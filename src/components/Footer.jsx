


const Footer = () => {
    return (
        <footer className=" text-white py-5 flex justify-around" style={{background:"#1D4340"}}>
            <div className="border-t border-gray-700 text-center text-sm">
                © {new Date().getFullYear()} Middlest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
