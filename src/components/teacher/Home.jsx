import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
// import Teach_Profile from "./teacher-component/Teach_Profile";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import API_Service from "../../api-service/API_Service";
import T_Image from "../../img/ava2.png";
import { Link } from "react-router-dom";
import Activities_Card from "./activities-comp/Activities_Card";
import Student_Profile from "./profile-comp/Student_Profile";
const Home = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await API_Service.get("/teachers/get-teachers");
        setTeacher(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTeacher();
  }, []);

  useEffect(() => {
    // console.log(teacher);
  }, [teacher]);

  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row>
          <Col sm={4} className="text-center">
            {" "}
            {/* <Teach_Profile data={teacher} /> */}
            {/* {teacher.length > 0 && <Teach_Profile data={teacher} />} */}
            <Card.Img
              variant="top"
              src={T_Image}
              style={{ height: 120, width: 120 }}
            />
            {/* <h4>Hello Teacher {teacher}</h4> */}
            <br />
            <h5>Ms. Jane Doe</h5>
            <Link to="/teacher/profile">
              <Button variant="outline-info" size="sm">
                View Profile
              </Button>{" "}
            </Link>
          </Col>
          <Col sm={8}>
            {" "}
            <Container>
              <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Body>
                        <Card.Title>25</Card.Title>
                        <Card.Text>Present</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <hr />
              <Row style={{ marginTop: -20 }}>
                <div className="mt-0">
                  <Button variant="success" size="sm" className="mt-4">
                    <Link to="/teacher/students">See all students</Link>
                  </Button>
                </div>

                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="activities-container">
        <Activities_Card />
      </Container>

      <Student_Profile />
    </>
  );
};

export default Home;
