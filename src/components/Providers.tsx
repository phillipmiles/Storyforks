'use client';

import { getAuthUserData } from '@/lib/firebase/api';
import { onAuthStateChanged } from '@/lib/firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

const Providers = ({ children }) => {
  const [authUser, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (userState) => {
      if (userState) {
        const userData = await getAuthUserData();
        setUser({ ...userState, public: userData });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
};
export default Providers;
