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
  
  // Register Form
  const registerForm = document.getElementById('register-form');
  
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;
    function showToast(message) {
      const toastContainer = document.querySelector('.toast-container');
      const toast = document.createElement('div');
      toast.classList.add('toast');
      toast.textContent = message;
      toastContainer.appendChild(toast);
    
      setTimeout(() => {
        toast.classList.add('show');
      }, 100);
    
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 300);
      }, 3000);
    }

    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered successfully
        const user = userCredential.user;
        console.log('User registered:', user);
        window.location.href = 'index.html'; // Redirect to the login page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration error:', errorMessage);
        // Display error message to the user
        showToast(errorMessage);
      });
  });
  