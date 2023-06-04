const hamburger = document.querySelector('.Hamburger-Menu');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  if (navBar.classList.contains('show')){
     navBar.classList.remove('show');
     hamburger.style.display = 'flex';
  }
  else{
    navBar.classList.add('show');
    hamburger.style.display = 'none';
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar') && !event.target.closest('.Hamburger-Menu')) 
  { navBar.classList.remove('show');
    hamburger.style.display = 'flex';
  }
});

function menu(){
  window.location.href = "menuPage.html"
}

const drinkItmes = [
  {drinkImage:'drink1.jpg',
  price :'8',name :'juice1'},
  {drinkImage:'drink2.jpg',
  price :'8',name :'juice2'},
  {drinkImage:'drink3.jpg',
  price :'8',name :'juice3'},
  {drinkImage:'drink4.jpg',
  price :'8',name :'juice4'},
  {drinkImage:'drink5.jpg',
  price :'8',name :'juice5'},
  {drinkImage:'drink6.jpg',
  price :'8',name :'juice6'},
  ]

let html = '';

drinkItmes.forEach((item)=>{
  html += `<div class="drinkItemsContainer">
          <img class="drinkItem" src="${item.drinkImage}" alt="drink">
          <p> ${item.name} </p>
          <p> ${item.price}$</p>
          </div>`
});


document.querySelector('.drinkContainer').innerHTML = html;