// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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

const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', signUp);

function signUp(event) {
  event.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password,name)
    .then(userCredential => {
      // Signed up successfully
      const user = userCredential.user
      userCredential.user.displayName = name;
      console.log('Signed up:', user);
    })
    .catch(error => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign up error:', errorMessage);
    });
}
