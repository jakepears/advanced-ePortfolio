// template_gq9r84e
// service_q9h7skv
//Vuqk4dWzU6PLP1Qw6 public key
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
      // Added rotate after tutorial
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

// gsap animation 
gsap.to(projects, {duration: 2, scrollTo:"#row"});
 