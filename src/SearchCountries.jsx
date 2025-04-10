import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import styles from "./SearchCountries.module.css";

export default function SearchCountries(){

const [country,setCountry]=useState([]);
const [search, setSearch]=useState("");

 useEffect(()=>{
 const fetchCountry=async()=>{
  try {
    let resp =await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
    let jSon = await resp.json();
    setCountry(jSon);
  } catch (error) {
    console.error("Error fetching Countries", error);
  }
 }
 
  fetchCountry();
 },[]); 
 
 let filtered = country.filter(countries =>
    countries.common.toLowerCase().includes(search.toLowerCase())
  );

return (

<div className={styles.container}>
    <input type="text" 
     placeholder="Search for Country"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className={styles.input}

      
    />
     <div className={styles.countryList}>
        {filtered.length > 0 ? (
          filtered.map((country) => (
            <CountryCard
              key={country.common}
              name={country.common}
              flag={country.png}
            />
          ))
        ) : (
          <p>No matching countries found.</p>
        )}
      </div>
 
</div>

)

}