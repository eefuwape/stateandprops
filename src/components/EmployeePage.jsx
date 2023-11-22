import Header from "./Header"

function EmployeePage(props) {

    const vp = Object.keys(props.employeeData).map((key, index) => {
        return (
            <div>
                <h4 key={index}>
                    {key}: {props.employeeData[key]}
                </h4>
            </div>            
        )
    })

    return (
        <div className="employeepage">
            <Header title="Employee" />
            {vp}
        </div>
    );
}

export default EmployeePage;