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

  const auth = getAuth();

  // ============================
  // Google Sign In function
  // ============================

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUserInfo(result.user);
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ============================
  // Google Current User function
  // ============================

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }
    });
  }, [auth]);

  // ============================
  // Form Register function
  // ============================
  const handleRegister = (e) => {
    e.preventDefault();

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.href = "/";
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ============================
  // Form Log In function
  // ============================
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setFormData(user);
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ============================
  // All Sign Out function
  // ============================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo([]);
        setFormData([]);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    userInfo,
    name,
    email,
    password,
    formData,
    error,
    setName,
    setEmail,
    setPassword,
    setFormData,
    handleGoogleSignIn,
    handleSignOut,
    handleRegister,
    handleLogIn,
  };
};

export default useFirebase;
