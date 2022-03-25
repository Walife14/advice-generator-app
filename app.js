/* advice section */
const idDisplay = document.querySelector('#aid')
const adviceDisplay = document.querySelector('#advice-text')
const adviceBtn = document.querySelector('#advice-btn')

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    idDisplay.innerHTML = data.slip.id
    adviceDisplay.innerHTML = `"${data.slip.advice}"`
}

adviceBtn.addEventListener('click', getAdvice)

window.onload = getAdvice;