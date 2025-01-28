import { useState } from "react";
import { Link } from "react-router-dom";


function Login(){
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const loginSubmit = async () => {
  //   const loginResponse = await fetch(
  //      `https://smit-backend-hackathon-production.up.railway.app/api/auth/login`,
  //     {
  //      method : "POST",
  //      headers : { "Content-type" : "application/json" },
  //      body : JSON.stringify({
  //        email : email, 
  //        password : password
  //      })
  //     }
  //    )
  //    loginResponse = await loginResponse.json()
  //   }

    return(
        <>
         <div className="bg-gray-50 flex items-center justify-center h-screen w-full">
           <div className="loginForm bg-white border border-gray-300 rounded-xl p-5">
            <h1 className="flex justify-center font-semibold text-4xl py-5">Login</h1>
            
            {/* inputs ⬇ */}
            <div className="mb-5 mt-8">
               <input type="email" 
               className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold" 
               placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
             </div>
             <div className="mb-5 mt-7">
               <input type="password" 
               className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold" 
               placeholder="Password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
             </div>
             {/* inputs ⬆ */}

            {/* buttons ⬇ */}
            <div className="pb-5">
             <button className="loginBtn bg-blue-600 hover:bg-blue-400 mt-5 p-2.5 text-white font-bold text-lg rounded-lg"
             >Login</button>
             <p className="flex justify-center gap-1 mt-3 font-medium text-gray-500">Don't have an account? <Link to={"/signup"} className="text-blue-500 hover:underline">Signup</Link></p>
            </div>
             
             {/* <hr className="mt-6 mb-1.5 border border-gray-300 " />

             <div className="flex justify-center">
              <button className="flex gap-10 items-center justify-center bg-gray-100 w-full text-gray-500 text-lg font-semibold p-2.5 rounded-lg mt-5">
               <img className="w-8" src={"https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"}/> 
               Continue With Google
              </button>
            </div> */}
            {/* buttons ⬆ */}

           </div>
         </div>
        </>   
    )
}

export default Login;