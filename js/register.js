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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered successfully
        const user = userCredential.user;
        console.log('User registered:', user);
          // Display Toast notification for successful registration
          Toast.fire({
            icon: "success",
            title: "Registered successfully"
          });

          // Redirect to the login page after registration
          setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to the login page
          }, 2000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error('Registration error:', errorMessage);

          // Display Toast notification for registration error
          Toast.fire({
            icon: "error",
            title: "Failed Registering User"
          });
        });
    });
    document.getElementById('register-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show loader
      document.getElementById('register-loader').style.display = 'block';
      
      // Hide button to prevent double submissions
      document.getElementById('register-button').style.display = 'none';
      
      // Proceed with your form submission logic, e.g., Firebase auth
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
          // Hide loader after task is done
          document.getElementById('register-loader').style.display = 'none';
          document.getElementById('register-button').style.display = 'block';
          // Registration success logic
        })
        .catch(function(error) {
          document.getElementById('register-loader').style.display = 'none';
          document.getElementById('register-button').style.display = 'block';
          // Handle errors
        });
    });
    