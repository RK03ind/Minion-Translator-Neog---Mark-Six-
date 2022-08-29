document.querySelector(".translate-button").addEventListener("click", () => {
  var text = document.querySelector(".text-input").value;
  if (!text) return alert("Enter Something to translate");
  document.querySelector(".translate").innerText = "Translating...";
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector(".translate").innerText = "Translate";
      document.querySelector(".text-output").innerText =
        data.contents.translated;
    })
    .catch((error) => {
      alert("Something went wrong");
    });
});
