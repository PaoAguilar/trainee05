import React, { createContext, useState, useContext, useMemo } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const authState = useContext(AuthContext);
  return authState;
};

const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState(null);
  const providerValue = useMemo(() => ({ jwt, setJwt }), [jwt, setJwt]);
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
