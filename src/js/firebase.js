import './signin'
// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA3hADlXiNs1sXdUxR8pbsxRLOErTEmqfU',
  authDomain: 'authorisation-3967f.firebaseapp.com',
  projectId: 'authorisation-3967f',
  storageBucket: 'authorisation-3967f.appspot.com',
  messagingSenderId: '926560198246',
  appId: '1:926560198246:web:e18f20ad2d2adfa37e97a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle sign-up
async function signUp(event) {
  event.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // Update display name
    await updateProfile(user, { displayName: name });
    console.log('Signed up:', user);
    // Optionally, you can redirect the user to a new page after sign-up
    // window.location.href = '/welcome.html';
  } catch (error) {
    // Handle sign-up errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Sign up error:', errorMessage);
  }
}

// Function to initialize sign-up form