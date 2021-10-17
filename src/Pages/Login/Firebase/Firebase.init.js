import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confie";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;
