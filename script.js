const drinkSelection = [
  'Capsule',
  'Filter',
  'Espresso',
  'Single Orgin',
  'Decaf',
  'Blended',
  '250g',
  '500g',
  '1000g',
  'Wholebean',
  'Filter',
  'Cafetiére',
  'Every week',
  'Every 2 weeks',
  'Every month',
];
let orderSummaryMessage = document.getElementById('order-summary-message');
let orderPopup = document.getElementById('order-popup');
console.log(orderSummaryMessage);

let orderSummary = ['', '', '', '', ''];
let orderDetails = document.querySelectorAll('.order');
let orderSummaryDetails = document.querySelectorAll('.summary-order');
const priceBtn = document.getElementById('price-btn');
const hamburgerButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.close-button');
const mobileMenu = document.getElementById('mobile-nav-menu');
const mobileMenuLinks = document.querySelector('.mobile-nav-links');
hamburgerButton.addEventListener('click', function () {
  hamburgerButton.style.display = 'none';
  closeButton.style.display = 'block';
  mobileMenu.style.display = 'block';
  mobileMenuLinks.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
  hamburgerButton.style.display = 'block';
  closeButton.style.display = 'none';
  mobileMenu.style.display = 'none';
  mobileMenuLinks.style.display = 'none';
});

const allArrows = document.querySelectorAll('.row-arrow');
const expandingSections = document.querySelectorAll('.expanding-section');

allArrows.forEach((element, index) => {
  element.addEventListener('click', function () {
    if (expandingSections[index].classList.contains('selection-hidden')) {
      expandingSections[index].classList.remove('selection-hidden');
      allArrows[index].classList.add('up-arrow');
    } else {
      expandingSections[index].classList.add('selection-hidden');
      allArrows[index].classList.remove('up-arrow');
    }
  });
});

const allSquares = document.querySelectorAll('.square');

allSquares.forEach((element, index) => {
  element.addEventListener('click', function () {
    console.log(index % 3);
    console.log(index);
    //FIRST SQUARE IN THE ROW
    if (index % 3 === 0) {
      allSquares[index + 1].classList.remove('selected');
      allSquares[index + 2].classList.remove('selected');
    }
    //SECOND SQUARE IN THE ROW
    if (index % 3 === 1) {
      allSquares[index - 1].classList.remove('selected');
      allSquares[index + 1].classList.remove('selected');
    }
    if (index % 3 === 2) {
      allSquares[index - 2].classList.remove('selected');
      allSquares[index - 1].classList.remove('selected');
    }
    let arraryindex;

    switch (index) {
      case 0:
      case 1:
      case 2:
        arraryindex = 0;
        break;
      case 3:
      case 4:
      case 5:
        arraryindex = 1;
        break;
      case 6:
      case 7:
      case 8:
        arraryindex = 2;
        break;
      case 9:
      case 10:
      case 11:
        arraryindex = 3;
        break;
      case 12:
      case 13:
      case 14:
        arraryindex = 4;
        break;
    }
    orderSummary[arraryindex] = drinkSelection[index];
    console.log(orderSummary);
    amendOrder();
    allSquares[index].classList.add('selected');
  });
});

function amendOrder() {
  orderDetails.forEach((element, index) => {
    element.innerText = orderSummary[index];

    // orderPopup.innerHTML += orderSummary[index];
  });
  orderSummaryDetails.forEach((element, index) => {
    element.innerText = orderSummary[index];

    // orderPopup.innerHTML += orderSummary[index];
  });
  console.log(typeof orderSummary[4]);
  let selectedPlan = orderSummary[4];
  let planCost = 'Checkout - $0 / Month';
  if (selectedPlan === 'Every week') {
    planCost = 'Checkout - $14 / Week';
  } else if (selectedPlan === 'Every 2 weeks') {
    planCost = 'Checkout - $17.25 / Fortnight';
  } else if (selectedPlan === 'Every month') {
    planCost = 'Checkout - $22.50 / Month';
  }
  priceBtn.innerHTML = planCost;
}

//Popup order menu

const orderPopupBtn = document.getElementById('order-popup-btn');
const orderPopupMenu = document.querySelector('.summary-menu');
orderPopupBtn.addEventListener('click', () => {
  orderPopupMenu.style.display = 'block';
});
