const button = document.querySelector('.button')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
let pfp = document.querySelector('.pfp')
const card = document.querySelector('.card')
const fileInput = document.querySelector('#file-input')
const setPfp = document.querySelector('#file-input-label')
setPfp.addEventListener('click', () => {
    fileInput.addEventListener('change', () => {
        if (fileInput.value === '') {
            pfp.style.display = 'none'
            pfp.src = 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
            card.style.height = '294px' 
        } else {
            pfp.style.display = 'block'
            card.style.height = '454px'
            pfp.src = fileInput.value.replace(/^.*\\/, "")
        }
        console.log(fileInput.value)
    })
})
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
    if (username.style.outline === 'green solid 1px' && password.style.outline === 'green solid 1px') {
        window.open('index.html')
        localStorage.setItem('username', username.value)
        localStorage.setItem('mypfp', pfp.src)
    }
})