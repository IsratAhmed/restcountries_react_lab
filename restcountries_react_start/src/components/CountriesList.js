import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    return(
        <>
            <h2>Countries List here!</h2>
            <h3>Tick if you have visited them</h3>
            {countries.map((country, index)=> {
              return <CountryListItem key={index} countryName = {country}/>
            
            }) 
            }
            
        </>
    );
}

export default CountriesList;