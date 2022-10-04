import { useState } from "react";
const CountryListItem = ({countryName}) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        console.log("The box was checked");
        setIsChecked(!isChecked);
    };

    return (
        <>
        <li>{countryName} <input type="checkbox" checked={isChecked} onChange={handleOnChange}/> </li>
        </>  
    );
}

export default CountryListItem;