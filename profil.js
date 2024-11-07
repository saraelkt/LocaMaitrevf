document
  .getElementById("profile-pic-display")
  .addEventListener("click", function () {
    document.getElementById("profile-pic-input").click(); // Trigger file input when the image is clicked
  });

// Handle image file selection
document
  .getElementById("profile-pic-input")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("profile-pic-display").src =
          event.target.result; // Update image source
      };
      reader.readAsDataURL(file);
    }
  });
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

function edit() {
  const fields = ["username", "email", "phone", "password"];
  fields.forEach((field) => {
    const display = document.getElementById(`${field}-display`);
    const input = document.getElementById(field);
    const saveButton = document.getElementById("saveButton");
    const editButton = document.getElementById("editButton");

    // Show input and hide display
    display.classList.add("hidden");
    input.classList.remove("hidden");
    saveButton.classList.remove("hidden");
    editButton.classList.add("hidden");
  });

  // Décocher la case et masquer le mot de passe lors de l'édition
  const toggleCheckbox = document.getElementById("togglePassword");
  toggleCheckbox.checked = false;
  togglePasswordVisibility(false); // Reset password visibility
}

function save() {
  const fields = ["username", "email", "phone", "password"];
  fields.forEach((field) => {
    const display = document.getElementById(`${field}-display`);
    const input = document.getElementById(field);
    const saveButton = document.getElementById("saveButton");
    const editButton = document.getElementById("editButton");

    // Update the display with the input value
    display.textContent =
      field === "password" ? "*".repeat(input.value.length) : input.value;

    // Hide input and show display
    display.classList.remove("hidden");
    input.classList.add("hidden");
    saveButton.classList.add("hidden");
    editButton.classList.remove("hidden");
  });

  // Décocher la case et masquer le mot de passe lors de l'édition
  const toggleCheckbox = document.getElementById("togglePassword");
  toggleCheckbox.checked = false;
  togglePasswordVisibility(false); // Reset password visibility
}

function togglePasswordVisibility(show) {
  const passwordInput = document.getElementById("password");
  const passwordDisplay = document.getElementById("password-display");
  const toggleCheckbox = document.getElementById("togglePassword");

  if (show) {
    passwordInput.type = "text"; // Show password
    passwordDisplay.textContent = passwordInput.value; // Show actual password
  } else {
    passwordInput.type = "password"; // Hide password
    passwordDisplay.textContent = "*".repeat(passwordInput.value.length); // Show placeholder
  }
}

// Listen for changes on the checkbox
document
  .getElementById("togglePassword")
  .addEventListener("change", function () {
    togglePasswordVisibility(this.checked);
  });

// Initialize password display with masked characters
const passwordDisplay = document.getElementById("password-display");
const passwordValue = document.getElementById("password").value;
passwordDisplay.textContent = "*".repeat(passwordValue.length);

function editProfile() {
  // Affiche le champ de texte pour le nom et le bouton de sauvegarde
  document.getElementById("full-name-display").classList.add("hidden");
  document.getElementById("full-name-input").classList.remove("hidden");
  document.getElementById("editProfileButton").classList.add("hidden");
  document.getElementById("saveProfileButton").classList.remove("hidden");
}

function saveProfile() {
  // Enregistre le nouveau nom et restaure l'affichage initial
  const fullNameInput = document.getElementById("full-name-input");
  document.getElementById("full-name-display").textContent =
    fullNameInput.value;
  document.getElementById("full-name-display").classList.remove("hidden");
  fullNameInput.classList.add("hidden");
  document.getElementById("editProfileButton").classList.remove("hidden");
  document.getElementById("saveProfileButton").classList.add("hidden");
}

// Ajouter un gestionnaire d'événements pour chaque bouton d'annulation de réservation
document.querySelectorAll(".reservation-item button").forEach((button) => {
  button.addEventListener("click", function () {
    // Vérifier si le texte du bouton est "Annuler réservation"
    if (this.textContent.trim() === "Annuler réservation") {
      // Supprime la réservation (l'élément parent de ce bouton)
      const reservationItem = this.closest(".reservation-item");
      reservationItem.remove();
    }
  });
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
