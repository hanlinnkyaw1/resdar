const menu = [
  {image :'food2.jpg',
  prices:'35', name : 'Food1'},
  {image :'Special_Food1.jpg',
    prices:'30', name :'Food2'},
  {image :'food3.jpg',
  prices:'22', name : 'Food3'},
  {image :'food1.jpg',
    prices:'20', name: 'Food4'},
  {image :'food4.jpg',
  prices:'25', name : 'Food5'},
  {image:'Special_Food3.jpg',
    prices:'32', name :'Food6'},
  {image :'Special_Food4.jpg',
  prices:'10', name : 'Food7'},
  {image :'Special_Food2.jpg',
    prices:'18', name :'Food8'},
  {image :'food7.jpg',
  prices:'27', name : 'Food9'},
  {image :'drink1.jpg',
  prices:'8', name : 'juice1'},
  {image :'drink2.jpg',
    prices:'8', name: 'juice2'},
  {image :'drink3.jpg',
  prices:'8', name : 'juice3'},
  {image:'drink4.jpg',
    prices:'30', name :'juice4'},
  {image :'drink5.jpg',
  prices:'8', name : 'juice5'},
  {image:'drink6.jpg',
    prices:'30', name :'juice6'},
]
  
let htmlMenu= '' ;

menu.forEach((food)=>{
  htmlMenu += `
  <div class="menuItem">
    <img src="${food.image}" alt="Food/Food1.jpg">
    <p>${food.name}</p>
    <p class="prices">${food.prices}$</p>
  </div>`
})

document.querySelector('.menu-container').innerHTML = htmlMenu;

