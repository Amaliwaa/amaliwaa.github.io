
// script.js
let captchaAnswer;

function generateCaptcha() {
    // Generăm două numere aleatorii între 1 și 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    // Calculăm rezultatul corect al adunării
    captchaAnswer = num1 + num2;

    // Afișăm întrebarea în HTML
    document.getElementById('captcha-question').textContent = ${num1} + ${num2} = ?;
}

function validateForm() {
    // Obținem valorile câmpurilor
    const nume = document.getElementById('nume').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const judet = document.getElementById('judet').value;
    const tipSistem = document.getElementById('tip-sistem').value;
    const captchaInput = document.getElementById('captcha').value;

    // Validăm dacă toate câmpurile sunt completate
    if (nume === "" || email === "" || telefon === "" || judet === "" || tipSistem === "") {
        alert("Toate câmpurile sunt obligatorii!");
        return false;
    }

    // Validăm dacă numărul de telefon are 10 cifre
    if (!/^[0-9]{10}$/.test(telefon)) {
        alert("Introduceți un număr de telefon valid (10 cifre)!");
        return false;
    }

    // Validăm CAPTCHA-ul
    if (parseInt(captchaInput) !== captchaAnswer) {
        alert("CAPTCHA incorect! Încercați din nou.");
        return false;
    }

    // Dacă toate validările sunt trecute, se trimite formularul
    alert("Formularul a fost trimis cu succes!");
    return true;
}

// Generăm CAPTCHA-ul la încărcarea paginii
window.onload = generateCaptcha;
