(() => {
  "use strict;"


  const forms = document.querySelectorAll(".needs-validation");

 
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated')
    }, 
    false
);
  });
})();
//for auto hide flash in 3 second
document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach(alert => {
    setTimeout(() => {
      const alertInstance = bootstrap.Alert.getOrCreateInstance(alert);
      alertInstance.close();
    }, 10000);
  });
});