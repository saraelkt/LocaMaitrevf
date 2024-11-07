//menu

const mobileMenu = document.getElementById("mobileMenu");
const myMenu = document.getElementById("myMenu");

mobileMenu.addEventListener("click",(event)=>{
    event.preventDefault();
    if(myMenu.classList.contains("max-sm:block")){
        myMenu.classList.remove("max-sm:block");
    }else{
        myMenu.classList.add("max-sm:block");
    }
    
})

//filtre

const filtreButton = document.getElementById("filtreButton");
const filtre = document.getElementById("filtre");

filtreButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(filtre.classList.contains("hidden")){
        filtre.classList.remove("hidden");
    }else{
        filtre.classList.add("hidden");
    }
})


// Pour Vous

const pourVousPrev = document.getElementById("pourVousPrev");
const pourVousNext = document.getElementById("pourVousNext");

const pourVous1 = document.getElementById("pourVous1");
const pourVous2 = document.getElementById("pourVous2");
const pourVous3 = document.getElementById("pourVous3");
const pourVous4 = document.getElementById("pourVous4");
const pourVous5 = document.getElementById("pourVous5");

pourVousPrev.addEventListener("click", (event) => {
  event.preventDefault();
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!pourVous1.classList.contains("max-sm:hidden")) {
      return;
    } else if (!pourVous2.classList.contains("max-sm:hidden")) {
      pourVous1.classList.remove("max-sm:hidden");
      pourVous2.classList.add("max-sm:hidden");
    } else if (!pourVous3.classList.contains("max-sm:hidden")) {
      pourVous2.classList.remove("max-sm:hidden");
      pourVous3.classList.add("max-sm:hidden");
    } else if (!pourVous4.classList.contains("max-sm:hidden")) {
      pourVous3.classList.remove("max-sm:hidden");
      pourVous4.classList.add("max-sm:hidden");
    } else {
      pourVous4.classList.remove("max-sm:hidden");
      pourVous5.classList.add("max-sm:hidden");
    }
  } else {
    if (!pourVous1.classList.contains("hidden")) {
      return;
    } else {
      pourVous5.classList.add("hidden");
      pourVous1.classList.remove("hidden");
    }
  }
});
pourVousNext.addEventListener("click", (event) => {
  event.preventDefault();
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!pourVous5.classList.contains("max-sm:hidden")) {
      return;
    } else if (!pourVous4.classList.contains("max-sm:hidden")) {
      pourVous5.classList.remove("max-sm:hidden");
      pourVous4.classList.add("max-sm:hidden");
    } else if (!pourVous3.classList.contains("max-sm:hidden")) {
      pourVous4.classList.remove("max-sm:hidden");
      pourVous3.classList.add("max-sm:hidden");
    } else if (!pourVous2.classList.contains("max-sm:hidden")) {
      pourVous3.classList.remove("max-sm:hidden");
      pourVous2.classList.add("max-sm:hidden");
    } else if (!pourVous1.classList.contains("max-sm:hidden")) {
      pourVous2.classList.remove("max-sm:hidden");
      pourVous1.classList.add("max-sm:hidden");
    }
  } else {
    if (!pourVous5.classList.contains("hidden")) {
      return;
    } else {
      pourVous1.classList.add("hidden");
      pourVous5.classList.remove("hidden");
    }
  }
});

// catégories
const categoriePrev = document.getElementById("categoriePrev");
const categorieNext = document.getElementById("categorieNext");

const categorie1 = document.getElementById("categorie1");
const categorie2 = document.getElementById("categorie2");
const categorie3 = document.getElementById("categorie3");
const categorie4 = document.getElementById("categorie4");
const categorie5 = document.getElementById("categorie5");
const categorie6 = document.getElementById("categorie6");

categoriePrev.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("prev");
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!categorie1.classList.contains("max-sm:hidden")) {
      return;
    } else if (!categorie2.classList.contains("max-sm:hidden")) {
      categorie1.classList.remove("max-sm:hidden");
      categorie2.classList.add("max-sm:hidden");
    } else if (!categorie3.classList.contains("max-sm:hidden")) {
      categorie2.classList.remove("max-sm:hidden");
      categorie3.classList.add("max-sm:hidden");
    } else if (!categorie4.classList.contains("max-sm:hidden")) {
      categorie3.classList.remove("max-sm:hidden");
      categorie4.classList.add("max-sm:hidden");
    } else if (!categorie5.classList.contains("max-sm:hidden")) {
      categorie4.classList.remove("max-sm:hidden");
      categorie5.classList.add("max-sm:hidden");
    } else {
      categorie5.classList.remove("max-sm:hidden");
      categorie6.classList.add("max-sm:hidden");
    }
  } else {
    if (!categorie1.classList.contains("hidden")) {
      return;
    } else {
      categorie6.classList.add("hidden");
      categorie1.classList.remove("hidden");
    }
  }
});
categorieNext.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("next");
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!categorie6.classList.contains("max-sm:hidden")) {
      return;
    }
    if (!categorie5.classList.contains("max-sm:hidden")) {
      categorie6.classList.remove("max-sm:hidden");
      categorie5.classList.add("max-sm:hidden");
    } else if (!categorie4.classList.contains("max-sm:hidden")) {
      categorie5.classList.remove("max-sm:hidden");
      categorie4.classList.add("max-sm:hidden");
    } else if (!categorie3.classList.contains("max-sm:hidden")) {
      categorie4.classList.remove("max-sm:hidden");
      categorie3.classList.add("max-sm:hidden");
    } else if (!categorie2.classList.contains("max-sm:hidden")) {
      categorie3.classList.remove("max-sm:hidden");
      categorie2.classList.add("max-sm:hidden");
    } else if (!categorie1.classList.contains("max-sm:hidden")) {
      categorie2.classList.remove("max-sm:hidden");
      categorie1.classList.add("max-sm:hidden");
    }
  } else {
    if (!categorie6.classList.contains("hidden")) {
      return;
    } else {
      categorie1.classList.add("hidden");
      categorie6.classList.remove("hidden");
    }
  }
});

//Populaire

const populairePrev = document.getElementById("populairePrev");
const populaireNext = document.getElementById("populaireNext");

const populaire1 = document.getElementById("populaire1");
const populaire2 = document.getElementById("populaire2");
const populaire3 = document.getElementById("populaire3");
const populaire4 = document.getElementById("populaire4");
const populaire5 = document.getElementById("populaire5");


populairePrev.addEventListener("click", (event) => {
  event.preventDefault();
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!populaire1.classList.contains("max-sm:hidden")) {
      return;
    } else if (!populaire2.classList.contains("max-sm:hidden")) {
      populaire1.classList.remove("max-sm:hidden");
      populaire2.classList.add("max-sm:hidden");
    } else if (!populaire3.classList.contains("max-sm:hidden")) {
      populaire2.classList.remove("max-sm:hidden");
      populaire3.classList.add("max-sm:hidden");
    } else if (!populaire4.classList.contains("max-sm:hidden")) {
      populaire3.classList.remove("max-sm:hidden");
      populaire4.classList.add("max-sm:hidden");
    } else {
      populaire4.classList.remove("max-sm:hidden");
      populaire5.classList.add("max-sm:hidden");
    }
  } else {
    if (!populaire1.classList.contains("hidden")) {
      return;
    } else {
      populaire5.classList.add("hidden");
      populaire1.classList.remove("hidden");
    }
  }
});
populaireNext.addEventListener("click", (event) => {
  event.preventDefault();
  const ecran = window.innerWidth;
  if (ecran <= 639) {
    if (!populaire5.classList.contains("max-sm:hidden")) {
      return;
    } else if (!populaire4.classList.contains("max-sm:hidden")) {
      populaire5.classList.remove("max-sm:hidden");
      populaire4.classList.add("max-sm:hidden");
    } else if (!populaire3.classList.contains("max-sm:hidden")) {
      populaire4.classList.remove("max-sm:hidden");
      populaire3.classList.add("max-sm:hidden");
    } else if (!populaire2.classList.contains("max-sm:hidden")) {
      populaire3.classList.remove("max-sm:hidden");
      populaire2.classList.add("max-sm:hidden");
    } else if (!populaire1.classList.contains("max-sm:hidden")) {
      populaire2.classList.remove("max-sm:hidden");
      populaire1.classList.add("max-sm:hidden");
    }
  } else {
    if (!populaire5.classList.contains("hidden")) {
      return;
    } else {
      populaire1.classList.add("hidden");
      populaire5.classList.remove("hidden");
    }
  }
});