import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid'

import config from '../config';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFiles(file) {
  const storageRef = ref(storage, `images/${uuid()}.png`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function deleteFiles(fileName) {
  const desertRef = ref(storage, `images/${fileName}`);
  await deleteObject(desertRef);
}