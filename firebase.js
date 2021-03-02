
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC9jtAUs3nFyZcjlXRg7iGK5UYsRm2o8B4",
    authDomain: "cloudassignment2-f5de2.firebaseapp.com",
    databaseURL: "https://cloudassignment2-f5de2-default-rtdb.firebaseio.com",
    projectId: "cloudassignment2-f5de2",
    storageBucket: "cloudassignment2-f5de2.appspot.com",
    messagingSenderId: "793524365121",
    appId: "1:793524365121:web:352469e5996f65734723c0",
    measurementId: "G-WNJST32PLW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  // Reference messages collection
  var mRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('form').addEventListener('submit', sForm);
  
  // Submit form - take an event and prevent default behaviour 
  function sForm(e){
    e.preventDefault();
  
    // Create variables for the Reminder form 
    var reminder = InputValue('date');
    var topic = InputValue('topic');
    var message = InputValue('message');
   
    // Save message and pass data 
    sMessage(reminder, topic, message);
  
    // Show alert by using the querySelector function 
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 8 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },8000);
  

  // Function to get form values - Function takes id values
  function InputValue(id){
    return document.getElementById(id).value;
  }
  
  // Function to save reminder messages from form  to firebase using push method. Create object with all data 
  function sMessage(reminder, topic, message){
    var newMessageReference = mRef.push();
    newMessageReference.set({
      reminder: reminder,
      topic: topic,
      message: message
    });
}
  }
  