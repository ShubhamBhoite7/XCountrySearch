
import styles from "./CountryCard.module.css"
export default function CountryCard({flag,name}){

 return(
 <div className={styles.countryCard}>
<img src={flag} alt={name} className={styles.flag} />
    <p>{name}</p>
 </div>

 )

}    