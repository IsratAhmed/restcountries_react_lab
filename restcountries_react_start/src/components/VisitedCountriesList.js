import CountryListItem from "./CountryListItem";

const VisitedCountriesList = () => {

    //const [isFiltered, setIsFiltered] = useState(true);

    //const handleOnChange = () => {
    //    setIsFiltered(isChecked);
    //};

    return(
        <>
            <h2>All the countries I've visited!</h2>
            <CountryListItem />
        </>
    );
}

export default VisitedCountriesList;