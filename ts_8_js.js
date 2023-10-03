function validate() {
  var firstName = document.getElementById("i1").value;
  var lastName = document.getElementById("i2").value;
  var email = document.getElementById("i3").value;
  var password = document.getElementById("i4").value;
  var rePassword = document.getElementById("i5").value;
  var age = document.getElementById("i6").value;
  var phoneNumber = document.getElementById("i7").value;
  var address = document.getElementById("i8").value;
  var state = document.getElementById("i9").value;
  if (firstName.trim() === "") {
    document.getElementById("firstname-check").textContent = "POOR";
    document.getElementById("firstname-check").style.color = "red";
  }

  if (lastName.trim() === "") {
    document.getElementById("lastname-check").textContent = "POOR";
    document.getElementById("lastname-check").style.color = "red";
  }

  if (email.trim() === "") {
    document.getElementById("email-check").textContent = "POOR";
    document.getElementById("email-check").style.color = "red";
  }

  if (password.trim() === "") {
    document.getElementById("password-check").textContent = "POOR";
    document.getElementById("password-check").style.color = "red";
  }

  if (rePassword.trim() === "") {
    document.getElementById("re-password-check").textContent =
      "POOR OR MISMATCH";
    document.getElementById("re-password-check").style.color = "red";
  } else {
    if (rePassword !== password) {
      document.getElementById("re-password-check").textContent = "MISMATCH";
    }
  }

  if (age.trim() === "") {
    document.getElementById("age-check").textContent = "POOR";
    document.getElementById("age-check").style.color = "red";
  }

  if (phoneNumber.trim() === "") {
    document.getElementById("phone-number-check").textContent = "POOR";
    document.getElementById("phone-number-check").style.color = "red";
  }

  if (address.trim() === "") {
    document.getElementById("address-check").textContent = "POOR";
    document.getElementById("address-check").style.color = "red";
  }

  if (state.trim() === "") {
    document.getElementById("state-check").textContent = "POOR";
    document.getElementById("state-check").style.color = "red";
  }
  return false;
}
