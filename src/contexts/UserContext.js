import { createContext, useState } from "react";

import { login as loginHelper, logout as logoutHelper } from "../api/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (id, password, role) => {
    try {
      const response = await loginHelper(id, password, role);
      setUser(response.data);
    } catch (error) {
      throw new Error("שם משתמש או סיסמא לא נכונים");
    }
  };

  const logout = async () => {
    try {
      await logoutHelper();
      setUser(null);
    } catch (error) {
      throw new Error("הייתה בעיה בהתנתקות");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
