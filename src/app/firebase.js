import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZM_a3kQvv4dCWzyucBq2KLjNM2GIODYY",
  authDomain: "auth-39117.firebaseapp.com",
  projectId: "auth-39117",
  storageBucket: "auth-39117.appspot.com",
  messagingSenderId: "610167711061",
  appId: "1:610167711061:web:08ddedc361b74684307bdc"
};

const app = initializeApp(firebaseConfig);

export {app};
