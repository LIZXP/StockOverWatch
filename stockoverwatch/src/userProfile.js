import { db } from "./firebase-config"
import { useAuth } from "./contexts/AuthContext";
import { collection,
         getDocs,
         getDoc,
         setDoc,
         addDoc,
         updateDoc,
         deleteDoc,
         doc,
} from "firebase/firestore";

const useUserProfile = () => {
  const currentUser = useAuth().currentUser;
  const defaultUserProfile = {
    uid: currentUser.uid,
    icon: "",
    username: "",
    website: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
    funds: 0,
  };
  
  const updateUserProfile = async (infoObj) => {
    const docRef = doc(db, "user_profile", currentUser.uid);
    try {
      const userInfo = await getDoc(docRef);
      if (!userInfo.exists()) {
        infoObj = {
            ...defaultUserProfile,
            ...infoObj
        }
        await setDoc(docRef, infoObj);
        console.log("created userProfile");
      } else if (userInfo.exists()) {
        await updateDoc(docRef, infoObj);
        console.log("updated userProfile");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUserProfile = async (user) => {
    const docRef = doc(db, "user_profile", currentUser.uid);
    try {
      let userInfo = await getDoc(docRef);
      if (!userInfo.exists()) {
        await setDoc(docRef, defaultUserProfile);
        userInfo = await getDoc(docRef);
        return userInfo.data();
      } else {
        return userInfo.data();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return { updateUserProfile, getUserProfile };
};

export default useUserProfile;