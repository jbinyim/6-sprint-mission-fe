"use client";

import userApi from "@/lib/userApi";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  nickname: string;
  // 필요한 필드 추가
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  console.log(user, accessToken);

  useEffect(() => {
    const getToken = async () => {
      const data = await userApi.fetchToken();

      if (data) {
        setAccessToken(data.accessToken);
        setUser(data.user);
      } else {
        setUser(null);
        setAccessToken(null);
      }
    };

    getToken();
  }, []);

  const login = (user: User, token: string) => {
    setUser(user);
    setAccessToken(token);
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
