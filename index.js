document.querySelector(".translate").addEventListener("click", () => {
  var text = document.querySelector(".text-input").value;
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".text-output").innerHTML =
        data.contents.translated;
    });
});
