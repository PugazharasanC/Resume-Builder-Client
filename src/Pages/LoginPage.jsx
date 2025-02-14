
import { motion } from "framer-motion";

import atsVector from "../assets/ats-vector.png"; 

const LoginPage = () => {
  const handleClick = async (response) => {
 //console.log("Login Success:", response);
   try{
 window.location.href = "http://localhost:5500/auth/google";
    } catch (error) {
      console.error("API Call Failed:", error);
    }
  };

  return (
   
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md"
        >
          <img src={atsVector} alt="ATS Resume Builder" className="w-32 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Welcome to ATS Resume Builder</h1>
          <p className="text-gray-500 mb-6">Optimize your resume and land your dream job!</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign In With Google 
              </span>
            </button>
          
          </motion.div>
        </motion.div>
      </div>
  
  );
};

export default LoginPage;
