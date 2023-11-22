import SearchBar from "./SearchBar"
import Header from "./Header"
import EmployeeList from "./EmployeeList"
import employeesInfo from "../models/EmployeeInfo";

function HomePage () {
    return (
        <div className="homepage">
            <SearchBar />
            <Header title="Employee Directory" />
            <EmployeeList employeeList={employeesInfo} />
        </div>
    );
}

export default HomePage;