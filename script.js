const totaljackpot = document.querySelector('#totalJackpot')
let totalJackpotAmount = null

async function getJackpotAmount() {
  try {
    const response = await axios.get(
      'http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0'
    )
    if (response.statusText === 'OK') {
      let num = response.data.entity.totalAmount
      totalJackpotAmount = num
      let finalNum = num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      totaljackpot.innerHTML = finalNum
    }
  } catch (error) {
    console.log(error)
  }
}
getJackpotAmount()

function increaseJackpot() {
  let randomNumber = Math.random()
  totalJackpotAmount = totalJackpotAmount + randomNumber
  totalJackpotAmount = Math.round(totalJackpotAmount * 100) / 100
  let finalAmount = totalJackpotAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  totaljackpot.innerHTML = finalAmount
}

setInterval(() => {
  increaseJackpot()
}, 3000)