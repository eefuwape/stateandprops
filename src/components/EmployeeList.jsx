import EmployeeListItem from "./EmployeeListItem"

function EmployeeList(props) {

    const eList = props.employeeList.map((worker, p) => {
        return (
            <div key={p}>
                <div>
                <h3>{worker.name}</h3>
                <p>{worker.position}</p>
                </div>                
            </div>
        )
    })

    return (
        <div className="employeelist">
            {eList}
        </div>
    );
}

export default EmployeeList;