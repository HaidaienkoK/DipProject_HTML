
const selectedAll = document.querySelectorAll('.selected');
const optionsContainer = document.querySelectorAll('.options-container');

const clickItem = function (e) {
  optionsContainer.forEach(function (cont) {
    if (e.target.dataset.selected === cont.dataset.cont) {

      cont.classList.toggle('active');
      const optionsList = cont.querySelectorAll('.option');

      optionsList.forEach(o => {
        o.addEventListener('click', () => {
          e.target.innerHTML = o.querySelector('label').innerHTML;
          cont.classList.remove('active');
        });
      });
    }
  });
};

selectedAll.forEach(function (item) {
  /* Назначаем каждой кнопке обработчик клика */
  item.addEventListener('click', clickItem);
});


//! обработчик select на один выпадающий список
// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");
// });

// optionsList.forEach(o => {
//   o.addEventListener("click", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer.classList.remove("active");
//   });
// });