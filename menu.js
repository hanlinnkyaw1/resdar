const menu = [
  {image :'../Food/food2.jpg',
  prices:'35', name : 'Food1'},
  {image :'../Food/Special_Food1.jpg',
    prices:'30', name :'Food2'},
  {image :'../Food/food3.jpg',
  prices:'22', name : 'Food3'},
  {image :'../Food/food1.jpg',
    prices:'20', name: 'Food4'},
  {image :'../Food/food4.jpg',
  prices:'25', name : 'Food5'},
  {image:'../Food/Special_Food3.jpg',
    prices:'32', name :'Food6'},
  {image :'../Food/Special_Food4.jpg',
  prices:'10', name : 'Food7'},
  {image :'../Food/Special_Food2.jpg',
    prices:'18', name :'Food8'},
  {image :'../Food/food7.jpg',
  prices:'27', name : 'Food9'},
  {image :'../Food/drink1.jpg',
  prices:'8', name : 'juice1'},
  {image :'../Food/drink2.jpg',
    prices:'8', name: 'juice2'},
  {image :'../Food/drink3.jpg',
  prices:'8', name : 'juice3'},
  {image:'../Food/drink4.jpg',
    prices:'30', name :'juice4'},
  {image :'../Food/drink5.jpg',
  prices:'8', name : 'juice5'},
  {image:'../Food/drink6.jpg',
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

