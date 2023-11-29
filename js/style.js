// Navigation Scroll
const nav = document.querySelector("#myNav");
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY > navTop) {
    nav.classList.add("nav-active");
  } else {
    nav.classList.remove("nav-active");
  }
}
window.addEventListener("scroll", stickyNavigation);

// Multi step
const multiStep = document.querySelector("[data-multi-step]");
const formSteps = [...multiStep.querySelectorAll("[data-step]")];

const numFirst = document.querySelector("#number-first");
const numSecond = document.querySelector("#number-second");
const numThird = document.querySelector("#number-third");
const barFirst = document.querySelector("#bar-first");
const barSecond = document.querySelector("#bar-second");

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("step-active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStep.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  }
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("step-active", index === currentStep);
  });
  paginateNumber();
}

function paginateNumber() {
  if (currentStep == 0) {
    numSecond.classList.remove("active");
    barFirst.classList.remove("active");
  } else if (currentStep == 1) {
    numSecond.classList.add("active");
    numThird.classList.remove("active");
    barFirst.classList.add("active");
    barSecond.classList.remove("active");
  } else if (currentStep == 2) {
    numThird.classList.add("active");
    barSecond.classList.add("active");
  }
}

// Toggle Seats
const seats = document.querySelectorAll(".seat");
const totalDisplay = document.querySelector("#total");

const catPremium = document.querySelector("#premium");
const catPremiere = document.querySelector("#premiere");

let totalPrice = 0;
const formatPrice = formatRupiah(totalPrice);

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}

seats.forEach((seat) => {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("seat-occupied")) {
      seat.classList.toggle("seat-active");
      const premiereCategory = seat.classList.contains("premiere")
        ? 50000
        : 25000;
      const price = (totalPrice += seat.classList.contains("seat-active")
        ? premiereCategory
        : -premiereCategory);
      const formatPrice = formatRupiah(price);
      totalDisplay.textContent = `Total: ${formatPrice}`;
    }
  });
});

// Toggle Category Seats
function premiumSubmit() {
  seats.forEach((seat) => {
    seat.classList.remove("premiere");
  });
  catPremium.classList.add("cat-active");
  catPremiere.classList.remove("cat-active");
}

function premiereSubmit() {
  seats.forEach((seat) => {
    seat.classList.add("premiere");
  });
  catPremium.classList.remove("cat-active");
  catPremiere.classList.add("cat-active");
}

// Validate Input & Popup
const popup = document.querySelector(".popup");
const submit = document.getElementById("submit");

function activePopup(element) {
  if (element.checked) {
    submit.classList.remove("hidden");
  } else {
    submit.classList.add("hidden");
  }
}

function openPopup() {
  console.log("open");
  popup.classList.remove("hidden");
}

function closePopup() {
  console.log("close");
  popup.classList.add("hidden");
}
