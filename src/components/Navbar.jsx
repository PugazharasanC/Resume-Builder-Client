import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <Link to="/" className="text-lg font-bold">Resume Builder</Link>
            <div>
                <Link to="/dashboard" className="mx-4">Dashboard</Link>
                <Link to="/create-resume" className="bg-blue-500 px-4 py-2 rounded">Create Resume</Link>
            </div>
        </nav>
    );
};

export default Navbar;
