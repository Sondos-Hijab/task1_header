document
  .getElementById("infoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    // using local storage
    localStorage.setItem("formData", JSON.stringify(data));

    this.reset();

    alert("Form data has been saved to local storage!");
  });

//functions for adding and remocing shadow for form when in focus
function addShadow(element) {
  element.classList.add("focused");
}
function removeShadow(element) {
  element.classList.remove("focused");
}
