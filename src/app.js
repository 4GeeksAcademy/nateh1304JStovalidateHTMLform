/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document
  .getElementById("paymentForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById("cardNumber");
    const cvcNumber = document.getElementById("cvcNumber");
    const amount = document.getElementById("amount");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const cityName = document.getElementById("cityName");
    const state = document.getElementById("state");
    const postalCode = document.getElementById("postalCode");

    let hasError = false;
    const fields = [
      cardNumber,
      cvcNumber,
      amount,
      firstName,
      lastName,
      cityName,
      state,
      postalCode
    ];

    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.style.display = "none";
    errorMessageElement.innerText = "";
    fields.forEach(field => field.classList.remove("error"));

    const cardNumberValue = cardNumber.value;
    if (cardNumberValue.length < 15) {
      hasError = true;
      cardNumber.classList.add("error");
      errorMessageElement.innerText +=
        "Card number is too short. It must be at least 15 digits. ";
    } else if (cardNumberValue.length > 16) {
      hasError = true;
      cardNumber.classList.add("error");
      errorMessageElement.innerText +=
        "Card number is too long. It must be no more than 16 digits. ";
    } else if (isNaN(cardNumberValue)) {
      hasError = true;
      cardNumber.classList.add("error");
      errorMessageElement.innerText += "Card number must only contain digits. ";
    }

    const cvcValue = cvcNumber.value;
    if (cvcValue.length < 3 || cvcValue.length > 4 || isNaN(cvcValue)) {
      hasError = true;
      cvcNumber.classList.add("error");
      errorMessageElement.innerText += "CVC must be 3 or 4 digits. ";
    }

    if (!amount.value || isNaN(amount.value)) {
      hasError = true;
      amount.classList.add("error");
      errorMessageElement.innerText += "Amount must be a valid number. ";
    }

    if (!firstName.value) {
      hasError = true;
      firstName.classList.add("error");
      errorMessageElement.innerText += "First name is required. ";
    }

    if (!lastName.value) {
      hasError = true;
      lastName.classList.add("error");
      errorMessageElement.innerText += "Last name is required. ";
    }

    if (!cityName.value) {
      hasError = true;
      cityName.classList.add("error");
      errorMessageElement.innerText += "City is required. ";
    }

    if (state.value === "Pick a state") {
      hasError = true;
      state.classList.add("error");
      errorMessageElement.innerText += "Please select a state. ";
    }

    const postalCodeValue = postalCode.value;
    if (postalCodeValue.length !== 5 || isNaN(postalCodeValue)) {
      hasError = true;
      postalCode.classList.add("error");
      errorMessageElement.innerText += "Postal code must be 5 digits. ";
    }

    if (hasError) {
      errorMessageElement.style.display = "block";
    } else {
      console.log("Form submitted successfully!");
    }
  });
