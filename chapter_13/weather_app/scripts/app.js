const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

const time = document.querySelector('.time')
const icon = document.querySelector('icon img')

const updateUI = (data) => {
  // destructuring
  const { cityInfo, weather } = data

  // update details template
  details.innerHTML = `
      <h5 class="my-3">${cityInfo.LocalizedName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;c</span>
      </div>
  `

  // remove d-none if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}

const updateCity = async (city) => {
  const cityInfo = await getCity(city)
  const weather = await getWeather(cityInfo.Key)

  return {
    cityInfo,
    weather,
  }
}

cityForm.addEventListener('submit', (e) => {
  // prevent default action (refresh)
  e.preventDefault()

  // get city value from input (name='city) & reset form
  const city = cityForm.city.value.trim()
  cityForm.reset()

  // update the ui with new city
  updateCity(city)
    .then((data) => {
      console.log(data)
      updateUI(data)
    })
    .catch((err) => {
      console.log(err)
    })
})
