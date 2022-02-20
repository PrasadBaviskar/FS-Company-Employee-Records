import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Pagination } from "./Pagination";

export const Dashboard = () => {
  // const {page} = useParams();
  // console.log(useParams())
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        let resp = await fetch(`http://localhost:5000/employee?page=${page}`);
        let { result, pages } = await resp.json();
        setEmployeeList(result);
        // console.log(pages)
        setPages(pages)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [page]);

  //   console.log(employeeList);
  return (
    <>
      <h1> Employees List </h1>
      <Navbar />
      <div className="container">
        <div className="empdiv head">
          <div> Name </div>
          <div> Department </div>
          <div> Gender </div>
          <div> Joining Data </div>
          <div> Total Salary </div>
        </div>
        {employeeList.map((elm) => {
          return (
            <div key={elm._id} className="empdiv">
              <div> {elm.name} </div>
              <div> {elm.department} </div>
              <div> {elm.gender} </div>
              <div> {elm.joining_data}</div>
              <div> Total </div>
            </div>
          );
        })}
      </div>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </>
  );
};
