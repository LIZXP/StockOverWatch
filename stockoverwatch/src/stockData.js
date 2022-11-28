import { db } from "./firebase-config"
import { collection,
         getDocs,
         getDoc,
         addDoc,
         updateDoc,
         deleteDoc,
         doc,
} from "firebase/firestore";

const purchase_historyCollectionRef = collection(db, "purchase_history");

class stockData {
  addStock = (newPurchase) => {
    return addDoc(purchase_historyCollectionRef, newPurchase)
  };
  
  editStock = (id, updatedStock) => {
    const stockDoc = doc(db, "purchase_history", id);
    return updateDoc(stockDoc, updateDoc);
  };

  deleteStock = (id) => {
    const stockDoc = doc(db, "purchase_history", id);
    return deleteDoc(stockDoc);
  };

  getAllStocks = () => {
    return getDocs(purchase_historyCollectionRef);
  };

  getStock = (id) => {
    const stockDoc = doc(db, "purchase_history", id);
    return getDoc(stockDoc)
  };
}

export default new stockData();

