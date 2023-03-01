const images = document.querySelectorAll('.container img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const text = document.querySelectorAll('.container p')

let current = 0

next.addEventListener('click', () => {

  images[current].classList.remove('active')
  text[current].classList.remove('active')
  current++

  if (current === images.length) {
    current = 0
  }

  images[current].classList.add('active')
  text[current].classList.add('active')
})

prev.addEventListener('click', () => {

  images[current].classList.remove('active')
  text[current].classList.remove('active')
  current--

  if (current < 0) {
    current = (images.length - 1)
  }

  images[current].classList.add('active')
  text[current].classList.add('active')
})