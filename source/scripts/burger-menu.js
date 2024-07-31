const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  header.classList.toggle("open-menu");
});

function checkWidth() {
  // Проверяем ширину окна
  if (window.innerWidth < 768) {
    // Если ширина меньше 600px, добавляем класс
    header.classList.add("mobile-menu");
  } else {
    // Если ширина больше или равна 600px, убираем класс
    header.classList.remove("mobile-menu");
  }
}

// Вызываем функцию при загрузке страницы
window.onload = checkWidth;

// Добавляем обработчик события изменения размера окна
window.onresize = checkWidth;
