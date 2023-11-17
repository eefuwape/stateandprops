import SearchBar from "./SearchBar"
import Header from "./Header"
import EmployeeList from "./EmployeeList"

function HomePage () {
    return (
        <div className="homepage">
            <SearchBar />
            <Header />
            <EmployeeList />
        </div>
    );
}

export default HomePage;