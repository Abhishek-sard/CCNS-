import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (token && role) {
      setUser({
        token,
        role,
        name,
        email
      });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('name', userData.name);
    localStorage.setItem('email', userData.email);
    
    setUser({
      token: userData.token,
      role: userData.role,
      name: userData.name,
      email: userData.email
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setUser(null);
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    login,
    logout,
    isAdmin,
    isAuthenticated,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
 };
