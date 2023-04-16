import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import CourseModal from "./Modal";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
const Course = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log("courses", data.length);
  // let data = allCourses.filter(course=> course._id == courseId)
  // let data = allCourses.find((course) => course._id == courseId);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/courses`)
      .then((res) => res.json())
      .then((data) => {
        console.log("courses", data);

        setData(data);
        setIsLoading(false);
      });
  }, [data]);
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, you want to delete?");
    if (proceed) {
      const url = `${process.env.REACT_APP_API_BASE_URL}/courses/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // alert("deleted successfully");
            toast.success("deleted successfully");
            const remaining = data.filter((course) => course._id !== id);
            setData(remaining);
          }
        });
    }
  };
  return (
    <DashboardLayout>
      <main className="ttr-wrapper">
        <div className="container-fluid">
          <div className="db-breadcrumb">
            <h4 className="breadcrumb-title">Courses</h4>
            <ul className="db-breadcrumb-list">
              <CourseModal />
              {/* <li>Courses</li> */}
            </ul>
          </div>
          <div className="row">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Name</th>
                  <th>Course Type</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  data.map((dt, key) => (
                    <tr>
                      <td>{key + 1}</td>
                      <td>{dt.course_name}</td>
                      <td>{dt.course_type}</td>
                      <td>{dt.duration}</td>
                      <td>{dt.price.original}</td>
                      <td className="d-flex">
                        <Button
                          variant="outline-info"
                          size="sm"
                          className="mx-2"
                        >
                          <FaEdit />
                        </Button>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(dt._id)}
                        >
                          <FaTrash />
                        </Button>
                        {/* </div> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Course;
