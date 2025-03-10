document.addEventListener("DOMContentLoaded", function() {
    const ageVerificationPopup = document.getElementById("age-verification-popup");
    const verifyBtn = document.getElementById("verify-age");

    verifyBtn.addEventListener("click", function() {
        const birthdate = document.getElementById("birthdate").value;
        const age = new Date().getFullYear() - new Date(birthdate).getFullYear();

        if (age >= 21) {
            ageVerificationPopup.classList.remove("show");
        } else {
            alert("You must be 21 or older to enter.");
        }
    });

    // Show the age verification popup
    ageVerificationPopup.classList.add("show");
});
