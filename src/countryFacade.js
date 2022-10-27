//Add imports here

const countryFacade = () => {

  const getLabels = async () => {
    // Get Labels from server
    const response = await fetch(`http://localhost:3333/labels`)
    const data = await response.json()
    return data
  }

  const getCountries = async () => {
    // Get Countries from server
    const res = await fetch(`http://localhost:3333/countries`)
    const data = await res.json()
    return data
  }

  return {
    getLabels,
    getCountries
  }
}

export default countryFacade();