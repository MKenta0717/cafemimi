const menu = document.querySelector('.menu');
const circleMenu = document.querySelector('.circle_menu');
const circleBg = document.querySelector('.circle_bg');


menu.addEventListener('click',()=>{
  circleMenu.classList.toggle('active');
  circleBg.classList.toggle('active');
  menu.classList.toggle('open')
 
})