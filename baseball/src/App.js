import React, { Component } from 'react';
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }
  handleStrike = () => {
    const current = this.state.strikes;
    if (current === 2) {
      this.setState({ strikes: 0, balls: 0 });
    }
    else {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }))
    }
  }
  handleBall = () => {
    const current = this.state.balls;
    if (current === 3) {
      this.setState({ strikes: 0, balls: 0 });
    }
    else {
      this.setState(prevState => ({
        balls: prevState.balls + 1
      }))
    }
  }
  handleFoul = () => {
    const currentStrikes = this.state.strikes;
    if (currentStrikes < 2) {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }))
    }
  }
  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }
  render() {
    return (
      <section className="App">
        <Container>
          <Row>
            <Col xs={{ size: 12 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }} >
              <h1 className="text-center mt-2">Baseball Counter</h1>
              <Card>
                <CardBody>
                  <Display balls={this.state.balls} strikes={this.state.strikes} />
                </CardBody>
                <Dashboard onStrike={this.handleStrike} onBall={this.handleBall} onFoul={this.handleFoul} onHit={this.handleHit} />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}

export default App;
