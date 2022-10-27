import React, { useEffect, useState } from "react";

const CountryTable = ({getLabels, getCountries}) => {
  const [labels, setLabels] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
    const getData = async () => {
      const labelsFromServer = await getLabels()
      setLabels(labelsFromServer)
      const countriesFromServer = await getCountries()
      setCountries(countriesFromServer)
    }
    getData()
  }, 3000)
    return () => clearInterval(intervalId)
  }, [getLabels, getCountries])

    const sort = (event) => {
      event.preventDefault()
      const value = event.target.value
    // sort by country name
    // sort by population
    // sort by area
      if(value === "country") {
        setCountries([...countries].sort((a, b) => {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }))
      }

      if(value === "population") {
        setCountries([...countries].sort((a, b) => {
          var A = a.population;
          var B = b.population;
          return A - B;
      }))
      }

      if(value === "area") {
        setCountries([...countries].sort((a,b) => {
          var A = a.area;
          var B = b.area;
          return A - B;
        }))
      }

    }

    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <button value={"country"} onClick={sort}>SORT BY COUNTRY NAME</button>
        <button value={"population"} onClick={sort}>SORT BY POPULATION</button>
        <button value={"area"} onClick={sort}>SORT BY AREA</button>
      <table className="table">
        <thead>
          <tr>{labels.map(label => <td>{label}</td>)}</tr>
        </thead>
        <tbody>
         {countries.map(country => 
         <>
         <tr>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>{country.area}</td>
            <td>{country.timezones.length > 1 ? country.timezones.slice(0,1) : country.timezones}</td>
            <td>{country.borders.length > 1 ? country.borders.slice(0,1) : country.borders}</td>
            <td>{country.topLevelDomain}</td>
            <td>{country.currencies.length > 1 ? country.currencies.slice(0,1) : country.currencies}</td>
            <td>{country.languages.length > 1 ? country.languages.slice(0,1) : country.languages}</td>
            </tr>
          </>
         )}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;