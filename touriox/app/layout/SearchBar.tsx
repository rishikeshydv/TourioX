import SearchInput from "../components/Inputs/SearchInput";
import Points from "../components/PointsOfInterests.tsx/Points";


// SeachBar component
const SearchBar = () => {
    return (
        <div className="fixed w-full top-0 py-2 z-50 ml-24">
            <div className="flex flex-row items-center gap-3 justify-between">
                <SearchInput />
                <Points />
            </div>
        </div>
    )
}

export default SearchBar;