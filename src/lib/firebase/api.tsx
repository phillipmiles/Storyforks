import { db } from './clientApp';
import {
  doc,
  getDoc,
  setDoc,
  query,
  addDoc,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';

// https://firebase.google.com/docs/firestore/manage-data/add-data#web_2
export const addChapter = async (data) => {
  try {
    await addDoc(collection(db, 'chapters'), data);
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};

export const getRootChapters = async () => {
  try {
    const q = query(collection(db, 'chapters'), where('root', '==', null));
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
      // // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
    });
    return data;
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};

export const getChapter = async (id) => {
  try {
    const docRef = doc(db, 'chapters', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
      return;
    }
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};
