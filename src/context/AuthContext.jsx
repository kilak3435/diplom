import { createContext, useContext, useState,useEffect}from 'react';

const AuthContext=createContext();

export function AuthProvider({ children }) {
  const [user,setUser]=useState(null);

  useEffect(() => {
    // load from localstorage if available
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser){
      setUser(JSON.parse(savedUser));
    }
  },[]);

  const login=(username,password)=>{
    // Hardcoded demo logic
    if (username === 'admin' && password === 'admin123') {
      const adminUser = { username:'admin',role:'admin' };
      setUser(adminUser);
      localStorage.setItem('auth_user',JSON.stringify(adminUser));
      return true;
   }else if (username === 'user' && password === 'user123') {
      const normalUser ={username: 'user',role:'user' };
      setUser(normalUser);
      localStorage.setItem('auth_user', JSON.stringify(normalUser));
      return true;
    }
    return false;
  };

  const logout=()=>{
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
