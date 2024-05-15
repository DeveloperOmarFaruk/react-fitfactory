import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../Firebase/Firebase.initilaization";

const googleProvider = new GoogleAuthProvider();
Initialization();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  // ============================
  // Google Sign In function
  // ============================

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ============================
  // Google Current User function
  // ============================

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }

      setLoading(false);
    });
  }, [auth]);

  // ============================
  // Form Register function
  // ============================
  const handleRegister = () => {
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (!password.match(lowerCase)) {
      return setError("Password should contains lowercase letters!");
    }

    if (!password.match(upperCase)) {
      return setError("Password should contain uppercase letters!");
    }

    if (!password.match(numbers)) {
      return setError("Password should contains numbers also!");
    }

    if (password.length < 6) {
      return setError("Password length should be more than 6");
    }

    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ============================
  // Form Log In function
  // ============================
  const handleLogIn = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============================
  // All Sign Out function
  // ============================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo([]);
        setFormData([]);
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(true);
  };

  return {
    userInfo,
    name,
    email,
    password,
    formData,
    error,
    loading,
    setUserInfo,
    setError,
    setName,
    setEmail,
    setPassword,
    setFormData,
    setLoading,
    handleGoogleSignIn,
    handleSignOut,
    handleRegister,
    handleLogIn,
  };
};

export default useFirebase;
