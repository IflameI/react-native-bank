import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBcFeL8X3qzVFIoJJCZEKsyog9oRW1WNN8',
  authDomain: 'react-native-bank-5d293.firebaseapp.com',
  projectId: 'react-native-bank-5d293',
  storageBucket: 'react-native-bank-5d293.appspot.com',
  messagingSenderId: '1078888601623',
  appId: '1:1078888601623:web:309d6234119a3029756452',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
