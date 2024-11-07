let i = 9;
document.getElementById("ajouter").addEventListener("click", function () {
  const mod = document.getElementById("gridclass");

  // Change la classe pour augmenter le nombre de lignes
  mod.classList.replace("grid-rows-2", "grid-rows-3");

  // Crée un nouveau conteneur pour l'élément ajouté
  const newContainer = document.createElement("div");

  newContainer.className = "border border-black rounded-md w-60 h-auto p-4"; // Classes fixes pour le style
  newContainer.setAttribute("data-target", `grid${i}`); // Définir data-target avec i

  // Ajout de l'HTML dans le conteneur
  newContainer.innerHTML = `
    <div data-goal-form="grid${i}">
      <form>
        <input type="file" accept="image/*" class="file-input" onchange="loadImage(this)" style="font-size: 11px;" />

        <img class="uploaded-image" style="display: none; width: 240px; height: auto; object-fit: contain;" />
        <br />
        <input type="text" class="font-bold" placeholder="Nom" />
        <br />
        <input placeholder="Prix" type="text" />
      </form>
    </div>
    <div class="flex justify-center gap-3 mb-2">
      <button class="mod transition delay-150 duration-300 ease-in-out hover:bg-lightblue hover:scale-105 text-white bg-lightblue rounded-md w-24">
        Modifier
      </button>
      <button class="supp transition delay-150 duration-300 ease-in-out hover:bg-red hover:scale-105 bg-red text-white rounded-md w-24">
        Supprimer
      </button>
    </div>
    <button type="button" class="savesubmitt transition delay-150 duration-300 ease-in-out hover:bg-red hover:scale-105 bg-red text-white rounded-md w-24">
      Submitt
    </button>`;

  // Ajoute le nouveau conteneur à l'élément 'gridclass'
  mod.appendChild(newContainer);
  i++;

  // Ajout des écouteurs d'événements pour les nouveaux boutons
  newContainer.querySelector(".supp").addEventListener("click", function () {
    const targetid = newContainer.getAttribute("data-target");
    const targetdiv = document.querySelector(`div[data-target="${targetid}"]`);
    if (targetdiv) {
      targetdiv.classList.add("hidden"); // Utiliser `hidden` de Tailwind pour masquer
    }
  });

  newContainer.querySelector(".mod").addEventListener("click", function () {
    //modification
  });

  // Ajout d'écouteur pour le bouton "Submitt"
  newContainer
    .querySelector(".savesubmitt ")
    .addEventListener("click", function () {
      const disp = newContainer.querySelector(".savesubmitt ");
      const inputfull = newContainer.querySelectorAll('input[type="text"]');
      const inputname = inputfull[0];
      const inputPrice = inputfull[1];
      const imgfull = newContainer.querySelector(".uploaded-image");
      if (
        inputname.value.trim !== "" &&
        inputPrice.value.trim !== 0 &&
        imgfull.src != ""
      ) {
        disp.classList.add("hidden");
      } else {
        confirm("Attention 🚨🚨 !! Il faut remplir tout les champs");
      }
    });
});

// Fonction pour charger l'image
function loadImage(fileInput) {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const container = fileInput.closest("div[data-goal-form]"); // Trouve le conteneur parent
    const img = container.querySelector(".uploaded-image"); // Sélectionne l'image dans ce conteneur
    img.src = e.target.result;
    img.style.display = "block";
    fileInput.style.display = "none";
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

document.querySelectorAll(".supp").forEach((button) => {
  button.addEventListener("click", function () {
    const targetid = button
      .closest("div[data-target]")
      .getAttribute("data-target");
    const targetdiv = document.querySelector(`div[data-target="${targetid}"]`);
    if (targetdiv) {
      targetdiv.classList.add("hidden"); // Utiliser `hidden` de Tailwind pour masquer
    }
  });
});

document.querySelectorAll(".mod").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = button
      .closest("div[data-target]")
      .getAttribute("data-target");

    // Sélectionner les éléments correspondant à data-goal et data-goal-form
    const targetDiv = document.querySelector(`div[data-goal="${targetId}"]`);
    const formDiv = document.querySelector(`div[data-goal-form="${targetId}"]`);

    if (targetDiv && formDiv) {
      // Masquer le contenu actuel et afficher le formulaire
      targetDiv.classList.add("hidden");
      formDiv.classList.remove("hidden");
    }
  });
});
document.querySelectorAll(".save").forEach((button) => {
  button.addEventListener("click", function () {
    // Récupérer le `div` du formulaire parent
    const formDiv = button.closest("div[data-goal-form]");

    // Récupérer l'ID de la cible à partir de `data-goal-form`
    const targetId = formDiv.getAttribute("data-goal-form");

    // Sélectionner le `div` cible à mettre à jour
    const targetDiv = document.querySelector(`div[data-goal="${targetId}"]`);

    // Récupérer les valeurs des inputs
    const inputtext = formDiv.querySelector('input[placeholder="Nom"]').value;
    const inputprice = formDiv.querySelector('input[placeholder="Prix"]').value;

    if (targetDiv) {
      // Mettre à jour le contenu de `targetDiv` avec les nouvelles valeurs
      targetDiv.innerHTML = `
        <label class="change font-bold">${inputtext}</label><br />
        <label class="change">MAD ${inputprice}</label>
      `;

      // Masquer le formulaire et afficher le div mis à jour
      formDiv.classList.add("hidden");
      targetDiv.classList.remove("hidden");
    }
  });
});

const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#4A90E2",
        borderColor: "#003B5C",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});
var XValues = ["Prépayé", "Postpayé"];
var YValues = [40, 60];
var barColors = ["#4A90E2", "#7A7272"];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: XValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: YValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});
var X2Values = ["40%", "60%"];
new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: X2Values,
    datasets: [
      {
        backgroundColor: barColors,
        data: YValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});

var x3Values = ["75%"];
var y3Values = [3];
var barColors = ["#4A90E2"];

new Chart("myChart3", {
  type: "horizontalBar",
  data: {
    labels: x3Values,
    datasets: [
      {
        backgroundColor: barColors,
        data: y3Values,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{ display: false }], // Cache l'axe X
      yAxes: [{ display: false }], // Cache l'axe Y
    },
    title: {
      display: false,
    },
  },
});
function toggleMenu() {
  // Récupérer l'élément à afficher/masquer
  var menu = document.getElementById("clicked");

  // Vérifier si l'élément est actuellement caché
  if (menu.classList.contains("hidden")) {
    // Si caché, on l'affiche
    menu.classList.remove("hidden");
  } else {
    // Sinon, on le cache
    menu.classList.add("hidden");
  }
}

document
  .getElementById("dropdownDefault")
  .addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  });

document
  .querySelectorAll("#dropdown input[type=checkbox]")
  .forEach((checkbox) => {
    checkbox.addEventListener("change", filterReservations);
  });

function filterReservations() {
  const selectedCategories = Array.from(
    document.querySelectorAll("#dropdown input[type=checkbox]:checked")
  ).map((checkbox) => checkbox.nextElementSibling.textContent.trim());

  document.querySelectorAll(".reservation-item").forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    item.style.display =
      selectedCategories.includes(itemCategory) ||
      selectedCategories.length === 0
        ? "block"
        : "none";
  });
}
