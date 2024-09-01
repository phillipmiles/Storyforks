import { getAuthUser } from './auth';
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
  runTransaction,
  DocumentReference,
  FieldPath,
  documentId,
  updateDoc,
  increment,
} from 'firebase/firestore';

export const getAuthUserDoc = () => {
  const currentUser = getAuthUser();
  const usersRef = collection(db, 'users');
  const userDoc = doc(usersRef, currentUser.uid);
  return userDoc;
};
export const getDocRef = async (docRef: DocumentReference) => {
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

export const getAuthUserData = async () => {
  const userDoc = getAuthUserDoc();
  return await getDocRef(userDoc);
};

export const createUser = async (uid, data) => {
  const collectionRef = collection(db, 'users');
  const docRef = doc(collectionRef, uid);
  await setDoc(docRef, data);
};

// https://firebase.google.com/docs/firestore/manage-data/add-data#web_2
export const addChapter = async (data) => {
  try {
    const userDoc = getAuthUserDoc();

    const collectionRef = collection(db, 'chapters');
    const docRef = doc(collectionRef);

    console.log({
      ...data,
      root: docRef.id,
      userRef: userDoc,
    });
    await setDoc(docRef, {
      ...data,
      root: docRef.id,
      userRef: userDoc,
    });
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};

export const getRootChapters = async () => {
  try {
    const q = query(collection(db, 'chapters'), where('parent', '==', null));
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
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
      return;
    }
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};

export const getMyChapters = async () => {
  try {
    const userDoc = getAuthUserDoc();

    const q = query(
      collection(db, 'chapters'),
      where('userRef', '==', userDoc)
    );
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
      // // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
    });
    return data;
  } catch (error) {
    console.error('Error getting my chapters', error);
  }
};

export const getChildrenChapters = async (parentId) => {
  try {
    const q = query(
      collection(db, 'chapters'),
      where('parent', '==', parentId)
    );
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error('Error adding new chapter', error);
  }
};

export const getAncestors = async (ancestors) => {
  try {
    const q = query(
      collection(db, 'chapters'),
      where(documentId(), 'in', ancestors)
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error('Error getting ancestors', error);
  }
};

export const forkChapter = async (chapterId, payload) => {
  try {
    await runTransaction(db, async (transaction) => {
      const userDoc = getAuthUserDoc();

      const collectionRef = collection(db, 'chapters');
      const docRef = doc(collectionRef, chapterId);

      await updateDoc(docRef, {
        numChildren: increment(1),
      });

      // const docSnap = await transaction.get(docRef);

      // if (!docSnap.exists()) {
      //   throw 'Document does not exist!';
      // }

      // const newPopulation = docSnap.data().population + 1;

      const forkRef = doc(collectionRef);
      // batch.set(nycRef, { name: 'New York City' });

      transaction.set(forkRef, {
        ...payload,
        userRef: userDoc,
      });
      // transaction.update(docRef, { population: newPopulation });
    });
    console.log('Transaction successfully committed!');
  } catch (e) {
    console.log('Transaction failed: ', e);
  }
};

export const updateUserDisplayName = async () => {};
