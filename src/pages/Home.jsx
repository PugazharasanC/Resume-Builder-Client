import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        window.open("http://localhost:5500/auth/google", "_self"); // Backend Google OAuth URL
    };

    useEffect(() => {
        // Check if user is already authenticated (Modify this based on your auth flow)
        fetch("http://localhost:5500/auth/user", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.email) {
                    navigate("/dashboard"); // Redirect if user is already logged in
                }
            })
            .catch(() => {});
    }, [navigate]);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Resume Builder</h1>
            <p className="text-lg text-gray-600 mb-6">Create professional resumes in minutes with customizable templates.</p>

            {/* Sign in with Google Button */}
            {/* <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg mb-4"
                onClick={handleGoogleLogin}
            >
                Sign in with Google
            </button> */}

            {/* Go to Dashboard Button */}
            <button
                className="bg-gray-500 text-white px-6 py-3 rounded-lg text-lg"
                onClick={() => navigate("/dashboard")}
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default Home;
