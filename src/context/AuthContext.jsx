import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load saved session
  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) {
          setUser(currentUser);
        }
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  // Login
  const login = async (email, password) => {
    const loggedUser = await authService.login(
      email,
      password
    );

    setUser(loggedUser);

    return loggedUser;
  };

  // Register
  const register = async (formData) => {
    const newUser = await authService.register(
      formData
    );

    setUser(newUser);

    return newUser;
  };

  // Logout
  const logout = async () => {
    await authService.logout();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}