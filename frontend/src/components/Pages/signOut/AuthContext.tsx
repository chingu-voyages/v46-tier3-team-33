import React, { createContext, useContext, useState,ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const signout = () => {
    setIsAuthenticated(false);
    //backend signout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

