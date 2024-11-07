const champEmail = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailInscription = document.getElementById("emailInscription");
const emailErrorInscription = document.getElementById("emailErrorInscription");

const connect = document.getElementById("connect");
const creerCompte = document.getElementById("creerCompte");

champEmail.addEventListener("keyup",(event)=>{
    event.preventDefault();
    const email = champEmail.value.trim();
    if(!email.includes("@")){
        emailError.textContent = "Invalide Email";
    }else{
        emailError.textContent = "";
    }
})

emailInscription.addEventListener("keyup",(event)=>{
    event.preventDefault();
    const email = emailInscription.value.trim();
    if(!email.includes("@")){
        emailErrorInscription.textContent = "Invalide Email";
    }else{
        emailErrorInscription.textContent = "";
    }
})


connect.addEventListener("click",(event)=>{
    event.preventDefault();
    const error = emailError.textContent;
    if(error){
        return;
    }else{
        window.open("./accueil.html","_self");
    }
})

creerCompte.addEventListener("click",(event)=>{
    event.preventDefault();
    const error = emailErrorInscription.textContent;
    console.log(error)
    if(error){
        return;
    }else{
        window.open("./accueil.html","_self");
    }
})


const connexionContainer = document.getElementById("connexionContainer");
const connexion = document.getElementById("connexion");
const inscriptionContainer = document.getElementById("inscriptionContainer");
const subscribe = document.getElementById("subscribe");

const connectForm = document.getElementById("connectForm");
const inscriptionForm = document.getElementById("inscriptionForm");

connexion.addEventListener("click",(event)=>{
    event.preventDefault();
    inscriptionContainer.classList.remove("bg-white");
    connexionContainer.classList.add("bg-white");
    connexion.classList.add("text-darkblue");
    connexion.classList.add("font-bold");
    subscribe.classList.remove("text-darkblue");
    subscribe.classList.remove("font-bold");

    connectForm.classList.remove("hidden");
    inscriptionForm.classList.add("hidden");
    
})
subscribe.addEventListener("click",(event)=>{
    event.preventDefault();
    inscriptionContainer.classList.add("bg-white");
    connexionContainer.classList.remove("bg-white");
    connexion.classList.remove("text-darkblue");
    connexion.classList.remove("font-bold");
    subscribe.classList.add("text-darkblue");
    subscribe.classList.add("font-bold");

    connectForm.classList.add("hidden");
    inscriptionForm.classList.remove("hidden");
})


const inscriptionLink = document.getElementById("inscriptionLink");
const connectLink = document.getElementById("connectLink");

inscriptionLink.addEventListener("click",(event)=>{
    event.preventDefault();
    connectForm.classList.add("hidden");
    inscriptionForm.classList.remove("hidden");
})
connectLink.addEventListener("click",(event)=>{
    event.preventDefault();
    connectForm.classList.remove("hidden");
    inscriptionForm.classList.add("hidden");
})
