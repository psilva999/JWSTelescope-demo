export function login() {
  const login = document.querySelector(".singup-login.active .login"),
        sign = document.querySelector(".signup")

  if (!login.classList.contains("active")) {
    sign.classList.remove("active")
    login.classList.add("active")
  }
}

export function sign() {
  const login = document.querySelector(".singup-login.active .login"),
        sign = document.querySelector(".signup")

  console.log(login, sign)

  if (!sign.classList.contains("active")) {
    login.classList.remove("active")
    sign.classList.add("active")
  } 
}

export function handleLoginSign(e) {
  const signLogin = document.querySelector(".singup-login"),
        login = document.querySelector('.singup-login .login'),
        sign = document.querySelector('.singup-login .signup')

  if (signLogin.classList.contains('active'))
    removeLogin()

  else {
    signLogin.classList.add("active")
    signLogin.style.animation = 'opacity-one .1s linear forwards' 

    if (e.target.id === 'login-button' && !login.classList.contains("active")) {
      sign.classList.remove("active")
      login.classList.add('active')
    }

    else if (e.target.id === 'sign-button' && !sign.classList.contains("active")) { 
      login.classList.remove('active')
      sign.classList.add("active")
    }

  }
}

export function closeLoginFromOutside(e) {
  if (e.target.id === 'signup-login')
    removeLogin()
}

function removeLogin() {
  const signLogin = document.querySelector(".singup-login")

  signLogin.style.animation = 'opacity-zero .1s linear forwards'

  let tempo = 2,
      containerLogin = setInterval(countdown, 200)

  function countdown() {
    tempo--

    if (tempo === 0) {
      signLogin.classList.remove('active')
      clearInterval(containerLogin)
    }
  }
}

export function handlePassword() {
  const input = document.querySelector("#password"),
        eye = document.querySelector('.eye')

  if (input.type === "password") {
    input.type = "text";
    eye.classList.add("active")
  } 
  
  else {
    input.type = "password";
    eye.classList.remove('active')
  }
}

export function handleForm(e) {
  e.preventDefault()
}

export function handleInfografico(e) {
  const infografico = document.querySelector(".all-screen")

  if (!infografico.classList.contains("active")) {
    infografico.classList.add("active")
    infografico.style.animation = 'opacity-one .2s linear forwards'
  }

  else if (e.target.id === 'all-screen' || e.target.id === 'close-infos') {
    infografico.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 2,
        containerInfografico = setInterval(countdown, 200)

    function countdown() {
      tempo--

      if (tempo === 0) {
        infografico.classList.remove('active')
        clearInterval(containerInfografico)
      }
    }

  }
}

export function handleAllScreenProduct(e) {
  const allScreenProduct = document.querySelector(".all-screen-product"),
        allScreenImage = document.querySelectorAll('.all-screen-product article img'),

        arrayFullImages = [...allScreenImage],
        arrayProduct = [...document.querySelectorAll('.product img')]

  let arrayPosition = arrayProduct.indexOf(e.target)

  if (!allScreenProduct.classList.contains("active")) {
    allScreenImage.forEach(img => img.classList.remove("active"))
    arrayFullImages[arrayPosition].classList.add('active')

    allScreenProduct.classList.add("active")
    allScreenProduct.style.animation = 'opacity-one .2s linear forwards'
  }

  else if (e.target.id === 'all-screen-product' || e.target.id === 'close-product') {
    allScreenProduct.style.animation = 'opacity-zero .1s linear forwards'

    let tempo = 1,
        container = setInterval(countdown, 100)

    function countdown() {
      tempo--

      if (tempo === 0) {
        allScreenProduct.classList.remove('active')
        clearInterval(container)
      }
    }

  }
}

export function nextImageStore() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition + 1

  activeImage.classList.remove('active')
  
  if (position === 4) 
    arrayFullImages[0].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}

export function prevImageStore() {
  const allScreenImage = document.querySelectorAll('.all-screen-product article img'),
        arrayFullImages = [...allScreenImage],
        activeImage = document.querySelector('.all-screen-product article img.active')

  let arrayPosition = Number(arrayFullImages.indexOf(activeImage)),
      position = arrayPosition - 1

  activeImage.classList.remove('active')
  
  if (position === -1) 
    arrayFullImages[3].classList.add('active')

  else 
    arrayFullImages[position].classList.add('active')
}
