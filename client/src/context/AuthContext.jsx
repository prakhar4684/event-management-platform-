import React from "react";
import api from "../utils/axios";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);   
    React.useEffect(() => { 
        const storeUser = localStorage.getItem("user");
        if (storeUser) {    
            setUser(JSON.parse(storeUser));
        }
        setLoading(false);
    }, []);

    const register = async (name, email, password) => {
      try {
        const { data } = await api.post("/auth/Register", { name, email, password }); 
        return data;
        
      }catch (error) {
        console.error("Registration failed:", error);
        throw error;
      }
    
    } 




  const login = async(email ,password) => {
      try {
        const {data}=await api.post("/auth/login", { email, password });
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        return data;
      }catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
};    
    const verifyOtp= async(email, otp) => { 
      try{
        const {data}=await api.post("/auth/verify-otp", {email, otp});
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        return data;
      } catch (error) {
        console.error("OTP verification failed:", error);
        throw error;
      }
  };

  const logout = async() => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, verifyOtp, verifyOTP: verifyOtp }}>
      {children}
    </AuthContext.Provider>
  );
};