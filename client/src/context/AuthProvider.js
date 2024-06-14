import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../supabaseClient.js";
import axios from "axios";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

const login1 = async (email, password) => {
  const response = await axios.post("http://localhost:3001/api/login", {
    email,
    password,
  });
  console.log(response.data);
  return response.data;
};

const signOut = () => supabase.auth.signOut();

const passwordReset = (email) => {
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/senha",
  });
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setAuth(currentUser ? true : false);
      setLoading(false);
    };
    getUser();
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, user, loading, login, signOut, passwordReset }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
