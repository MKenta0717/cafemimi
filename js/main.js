const menu = document.querySelector('.menu');
const circleMenu = document.querySelector('.circle_menu');
const circleBg = document.querySelector('.circle_bg');
const hubMenu = document.querySelector('.hub_menu_list');

//.menuをクリックした際の挙動を作るfunction
function menuClick(target,plusClass){
  menu.addEventListener('click',()=>{
    target.classList.toggle(plusClass);
  })
}

//.activeをつけてmenuの背景色の出現
menuClick(circleMenu,'active');
menuClick(circleBg,'active');

//
menuClick(menu,'open');
menuClick(hubMenu,'open');
