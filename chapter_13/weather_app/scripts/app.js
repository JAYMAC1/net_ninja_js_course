const cityForm = document.querySelector('form')

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
    })
    .catch((err) => {
      console.log(err)
    })
  // const cityHeader = document.querySelector('h5')
  // cityHeader.textContent = city
})
