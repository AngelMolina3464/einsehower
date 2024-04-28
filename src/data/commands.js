import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { db } from "../data/firebaseConfig.js";

export const CreateDocument = async (nameCollection, dataPacked) => {
  const docRef = await addDoc(collection(db, nameCollection), dataPacked);
  console.log("Tarea Creada con el ID: ", docRef.id);
};

export const GetDocuments = async (nameCollection) => {
  const q = query(collection(db, nameCollection));
  const querySnapshot = await getDocs(q);
  const dataList = [];
  querySnapshot.forEach((doc) => {
    dataList.push({ ...doc.data(), id: doc.id });
  });
  return dataList;
};
