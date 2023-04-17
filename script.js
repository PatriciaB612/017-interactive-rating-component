const ratingBtns = document.querySelectorAll('.rating-btn')
const selectedValue = document.querySelector('.selected')
const submitBtn = document.querySelector('.submit')
const ThankyouContainer = document.querySelector('.thank-you-container')

//get value from selected option render it in the DOM

ratingBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const value = e.currentTarget.textContent
    selectedValue.textContent = value
  })
})

//Show thank you message

submitBtn.addEventListener('click', function () {
  ThankyouContainer.classList.toggle('no-show')
})
