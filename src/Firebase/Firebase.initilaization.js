import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const Initialization = () => {
  initializeApp(firebaseConfig);
};

export default Initialization;
