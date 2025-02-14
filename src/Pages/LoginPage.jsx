import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import axios from "axios";
import atsVector from "../assets/ats-vector.png"; 
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
  const handleSuccess = async (response) => {
    //console.log("Login Success:", response);
    try {
      const res = await axios.get("http://localhost:5500/auth/google");
      console.log("API Response:", res.data);
      navigate("/home");
    } catch (error) {
      console.error("API Call Failed:", error);
    }
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="866486045273-307s3pn542qvj0eqsg7bo9rpaoaqovnu.apps.googleusercontent.com">
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
            <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
          </motion.div>
        </motion.div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
