const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const home = document.querySelector('.home');
const container1 = document.querySelector('.container');
home.addEventListener('click', () => {
  container1.classList.remove('active');
}) 
const services = document.querySelector('.services');
const shadowOne = document.querySelector('.shadow.one');
services.addEventListener('click', () => {
  shadowOne.computedStyleMap.transform = '';
})