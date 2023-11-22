import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import './App.css';
import employeesInfo from "./models/EmployeeInfo";

function App() {
  return (
    <div className="App">
      <HomePage employeesData={employeesInfo}/>
      <EmployeePage employeeData={employeesInfo[1]}/>
    </div>
  );
}

export default App;
