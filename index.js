document.querySelector(".translate-button").addEventListener("click", () => {
  var text = document.querySelector(".text-input").value;
  if (!text) return alert("Enter Something to translate");
  document.querySelector(".translate-button").innerText = "Translating...";
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector(".translate-button").innerText = "Translate";
      document.querySelector(".text-output").innerText =
        data.contents.translated;
    })
    .catch((error) => {
      document.querySelector(".translate-button").innerText = "Translate";
      alert("Something went wrong");
    });
});
