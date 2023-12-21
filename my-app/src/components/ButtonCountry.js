import React, { useState } from 'react'

export default function ButtonCountry({ countryList, setCountryList }) {
    // const [countryList, setCountryList] = useState([])
    return (
        <div>
            <button style={countryList.includes('America') ? { fontWeight: 'bold' } : null} onClick={() => {
                if (!countryList.includes('America')) { setCountryList([...countryList, 'America']) } else {
                    setCountryList([...countryList.filter((country) => { if (country !== 'America') { return country } })])
                }
            }}>America</button>
            <button style={countryList.includes('Korea') ? { fontWeight: 'bold' } : null} onClick={() => {
                if (!countryList.includes('Korea')) { setCountryList([...countryList, 'Korea']) } else {
                    setCountryList([...countryList.filter((country) => { if (country !== 'Korea') { return country } })])
                }
            }}>Korea</button>
            <button style={countryList.includes('Japan') ? { fontWeight: 'bold' } : null} onClick={() => {
                if (!countryList.includes('Japan')) { setCountryList([...countryList, 'Japan']) } else {
                    setCountryList([...countryList.filter((country) => { if (country !== 'Japan') { return country } })])
                }
            }}>Japan</button>
            <button style={countryList.includes('Brazila') ? { fontWeight: 'bold' } : null} onClick={() => {
                if (!countryList.includes('Brazila')) { setCountryList([...countryList, 'Brazila']) } else {
                    setCountryList([...countryList.filter((country) => { if (country !== 'Brazila') { return country } })])
                }
            }}>Brazila</button>
        </div >
    )
}
