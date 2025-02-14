import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create authentication context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user data from backend
        axios.get("http://localhost:5000/auth/user", { withCredentials: true })
            .then(res => {
                setUser(res.data); // Set user data
            })
            .catch(() => {
                setUser(null); // No user found, logout
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const logout = async () => {
        await axios.get("http://localhost:5000/auth/logout", { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
