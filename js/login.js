// Firebase Configuration
const firebaseConfig = {
  databaseURL: "https://lostandfound-e3d1d-default-rtdb.firebaseio.com/",
apiKey: "AIzaSyDxDcnRl1NsWlKvXiDKFT_m5fgewHGv1H0",
authDomain: "lostandfound-e3d1d.firebaseapp.com",
projectId: "lostandfound-e3d1d",
storageBucket: "lostandfound-e3d1d.appspot.com",
messagingSenderId: "798654626600",
appId: "1:798654626600:web:fb253dafc2aa9e47096e1d",
measurementId: "G-H51RQ9Q3R1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Login Form
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
      window.location.href = 'main.html'; // Redirect to your portal page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorMessage);
      // Display error message to the user
      alert(errorMessage);
    });
});

// Forgot Password
const forgotPasswordLink = document.getElementById('forgot-password');

forgotPasswordLink.addEventListener('click', (e) => {
e.preventDefault();

const email = prompt('Enter your email to reset password:');
if (email) {
  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert('Password reset email sent. Please check your inbox.');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error('Forgot password error:', errorMessage);
      // Display error message to the user
      alert(errorMessage);
    });
}
});