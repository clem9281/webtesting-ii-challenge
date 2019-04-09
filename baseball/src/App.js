import React, { Component } from 'react';
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Container>
          <Row>
            <Col xs={{ size: 12 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }} >
              <h1 className="text-center mt-2">Baseball Counter</h1>
              <Card>
                <CardBody>
                  <Display />
                </CardBody>
                <Dashboard />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}

export default App;
