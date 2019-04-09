import React from 'react';
import { Card, CardBody, Container } from "reactstrap";
import styled from "styled-components";

const Counter = styled.p`
    font-size: 2rem;
`;

const Display = ({ balls, strikes }) => {
    return (
        <Container className="display d-flex justify-content-around flex-wrap">
            <Card className="mt-3">
                <CardBody className="px-5 pt-0">
                    <Counter>Strikes: {strikes}</Counter>
                </CardBody>
            </Card>
            <Card className="mt-3">
                <CardBody className="px-5 pt-0">
                    <Counter>Balls: {balls}</Counter>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Display;