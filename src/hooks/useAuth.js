import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { REACT_APP_API_URL } from "@env";
import { login as loginHelper, logout as logoutHelper } from "../api/auth";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (id, password, role) => {
    try {
      const response = await loginHelper(id, password, role);
      setUser(response.data);
    } catch (error) {
      setError("שם משתמש או סיסמא לא נכונים");
    }
  };

  const logout = async () => {
    try {
      await logoutHelper();
      setUser(null);
    } catch (error) {
      setError("הייתה בעיה בהתנתקות");
    }
  };

  const checkAuthStatus = async () => {
    try {
      const respnose = await axios.get(`${REACT_APP_API_URL}/auth/checkAuth`);
      setUser(respnose.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    login,
    logout,
    error,
  };
};

export default useAuth;
