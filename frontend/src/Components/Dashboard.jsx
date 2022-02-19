import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employee")
      .then((d) => {
        return d.json();
      })
      .then((d) => {
        setEmployeeList(d);
      });
  }, []);

  //   console.log(employeeList);
  return (
    <>
      <h1>Dashboard</h1>

      <div className="container">
        <div className="empdiv">
          <p> Name </p>
          <p> Department </p>
          <p> Joining Data </p>
          <p> Salary </p>
        </div>
        {employeeList.map((elm) => {
          return (
            <div className="empdiv">
              <p> {elm.name} </p>
              <p> {elm.department} </p>
              <p> {elm.gender} </p>
              <p> {elm.joining_data} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
