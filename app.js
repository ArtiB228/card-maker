const slider = document.querySelector('.card-slider');
const topLayer = document.querySelector('.top_layer')
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cmpltBtn = document.querySelector('.cmplt-btn')
const slides = document.querySelectorAll('.card');
let cardNumber = document.querySelectorAll('.card_number')
let cardCV = document.querySelectorAll('.card_cv')
let cardName = document.querySelectorAll('.card_name')
let cardSurname = document.querySelectorAll('.card_surname')
let cardDate = document.querySelectorAll('.card_date')
const cardChangerNumber = document.querySelector('.card-changer_number')
const cardChangerCV = document.querySelector('.card-changer_cv')
let cardChangerName = document.querySelector('.card-changer_name')
let cardChangerSurname = document.querySelector('.card-changer_surname')
let cardChangerDate = document.querySelector('.card-changer_date')
const cross = document.querySelector('.fa-solid')
const cardCompleted = document.querySelector('.card-completed')
const navName = document.querySelector('.nav_name')
let fullness = 0
let newPfp = document.querySelector('.new-pfp')
let currentIndex = 0;
if (localStorage.getItem('username') === null && localStorage.getItem('mypfp') === null) {
    newPfp.src = 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
} else {
    navName.textContent = localStorage.getItem('username')
    newPfp.src = localStorage.getItem('mypfp')
}
function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
}
function selectStyle1() {
    currentIndex = 0
    showSlide(currentIndex)
    console.log(currentIndex)
}
function selectStyle2() {
    currentIndex = 1
    showSlide(currentIndex)
    console.log(currentIndex)
}

prevButton.addEventListener('click', selectStyle1)
nextButton.addEventListener('click', selectStyle2)
showSlide(currentIndex)
cardChangerCV.addEventListener('click', () => {
    let rand = Math.floor(Math.random()*(999-100+1)+100)
    for (let i = 0; i < cardCV.length; i++) {
        cardCV[i].textContent = rand
    }
    cardChangerCV.setAttribute('disabled', '')
})
cardChangerNumber.addEventListener('click', () => {
    let rand = `${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)}`
    for (let i = 0; i < cardNumber.length; i++) {
        cardNumber[i].textContent = rand
    }
    cardChangerNumber.setAttribute('disabled', '')
})
cardChangerName.addEventListener('input', () => {
    for (let i = 0; i < cardName.length; i++) {
        cardName[i].textContent = cardChangerName.value
    }
    if (cardChangerName.value.length === 0) {
        cardChangerName.style.outline = 'solid 1px red'
        fullness <= 1
    } else {
        cardChangerName.style.outline = 'solid 1px green' 
    }
})
cardChangerSurname.addEventListener('input', () => {
    for (let i = 0; i < cardSurname.length; i++) {
        cardSurname[i].textContent = cardChangerSurname.value
    }
    if (cardChangerSurname.value.length === 0) {
        cardChangerSurname.style.outline = 'solid 1px red'
    } else {
        cardChangerSurname.style.outline = 'solid 1px green'
    }
})
cardChangerDate.addEventListener('input', () => {
    for (let i = 0; i < cardDate.length; i++) {
        cardDate[i].textContent = String(cardChangerDate.value).replace(/-/g, '.').slice(0, 7)
    }
    if (cardChangerDate.value.length <= 9) {
        cardChangerDate.style.outline = 'solid 1px red'
    } else {
        cardChangerDate.style.outline = 'solid 1px green'
    }
})
cmpltBtn.addEventListener('click', () => { 
    if (cardChangerSurname.style.outline === 'green solid 1px', cardChangerDate.style.outline === 'green solid 1px', cardChangerName.style.outline === 'green solid 1px', cardChangerCV.attributes.getNamedItem('disabled') !== null, cardChangerNumber.attributes.getNamedItem('disabled') !== null  ) {
        window.close()
    } else {
        alert('You Have To Fill Everything')
    }
})