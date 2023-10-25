import React, { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const authContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser('login');
  };
  return {
    user,
    signIn,
  };
}
