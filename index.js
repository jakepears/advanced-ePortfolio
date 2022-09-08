let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 25;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 8}deg)`
    }
  }
  
  function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";


    emailjs
    .sendForm(
        'service_q9h7skv',
        'template_gq9r84e',
        event.target,
        'Vuqk4dWzU6PLP1Qw6'
    ).then(() => {
        throw new Error("Error");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        alert(
            "The email service is temporarily unavailable. Please contact me directly, jpearsonbusiness@gmail.com"
        );
    });
}


function toggleModal() {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    // toggle modal
    document.body.classList += " modal--open";
}

 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9iLlyJ_1AgXB3sLRJ84ZUW-tcLNkKc_Y",
  authDomain: "personal-portfolio-6f3f6.firebaseapp.com",
  projectId: "personal-portfolio-6f3f6",
  storageBucket: "personal-portfolio-6f3f6.appspot.com",
  messagingSenderId: "799279348349",
  appId: "1:799279348349:web:f252af094fa2d0b6074f14",
  measurementId: "G-HTP64SKTG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

