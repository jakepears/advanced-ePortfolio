// template_gq9r84e
// service_q9h7skv
//Vuqk4dWzU6PLP1Qw6 public key
let isModalOpen = false;
let contrastToggle = false;

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