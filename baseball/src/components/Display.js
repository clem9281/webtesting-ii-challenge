import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, Container } from "reactstrap";
import styled from "styled-components";

const Counter = styled.p`
    font-size: 5rem;
`;



const Display = (props) => {
    return (
        <Container className="display d-flex justify-content-around">
            <Card>
                <CardBody>
                    <Counter>0</Counter>
                    <CardTitle className="text-center">Strikes</CardTitle>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Counter>0</Counter>
                    <CardTitle className="text-center">Balls</CardTitle>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Display;