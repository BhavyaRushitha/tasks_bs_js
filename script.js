(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        var inputs = form.querySelectorAll("input");
        inputs.forEach(function (input) {
          var feedback = input.parentNode.querySelector(".invalid-feedback");
          if (input.value === "") {
            feedback.classList.add("show");
          } else {
            feedback.classList.remove("show");
          }
        });

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
