const button = document.querySelector('.button')
const myCAPTCHARadio = document.querySelector('.myCAPTCHA-radio')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
let pfp = document.querySelector('.pfp')
const card = document.querySelector('.card')
const fileInput = document.querySelector('#file-input')
const setPfp = document.querySelector('#file-input-label')
fileInput.onchange = function () {
    let src = URL.createObjectURL(this.files[0])
    pfp.style.display = 'block'
    card.style.height = '524px'
    pfp.src = src
}
username.addEventListener('input', () => {
    if (username.value.length === 0) {
        username.style.outline = 'solid 1px red'
    } else {
        username.style.outline = 'solid 1px green'
    }
})
password.addEventListener('input', () => {
    if (password.value.length === 0) {
        password.style.outline = 'solid 1px red'
    } else {
        password.style.outline = 'solid 1px green'
    }
})
button.addEventListener('click', () => {
    if (username.style.outline === 'green solid 1px' && password.style.outline === 'green solid 1px' && myCAPTCHARadio.checked) {
        window.open('indexx.html')
        localStorage.setItem('username', username.value)
        localStorage.setItem('mypfp', pfp.src)
    }
})