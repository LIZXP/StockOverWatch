import { db } from "./firebase-config";
import { getDoc, setDoc, updateDoc, doc } from "firebase/firestore";
import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";

const useForm = () => {
  const currentUser = useAuth().currentUser;
  const [values, setValues] = useState({
    uid: currentUser.uid,
    icon: "",
    username: "",
    website: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });
  const addProfileInfo = async (infoObj) => {
    const docRef = doc(db, "user_profile", currentUser.uid);
    try {
      const userInfo = await getDoc(docRef);
      if (!userInfo.exists()) {
        await setDoc(docRef, infoObj);
        console.log("New Doc create");
      } else if (userInfo.exists()) {
        const updateInfoObj = Object.fromEntries(
          Object.entries(infoObj).filter(([_, v]) => v !== "")
        );
        await updateDoc(docRef, updateInfoObj);
        console.log("userInfo updated");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProfileInfo(values);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleSubmit, onChange };
};

export default useForm;
