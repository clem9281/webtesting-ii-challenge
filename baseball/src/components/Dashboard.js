import React from 'react';
import { Button } from "reactstrap";

const Dashboard = ({ onStrike, onBall, onFoul, onHit }) => {
    return (
        <section className="dashboard pb-3 px-5 d-flex justify-content-between flex-wrap">
            <Button className="mt-3" onClick={onStrike}>Strike</Button>
            <Button className="mt-3" onClick={onBall}>Ball</Button>
            <Button className="mt-3" onClick={onFoul}>Foul</Button>
            <Button className="mt-3" onClick={onHit}>Hit</Button>
        </section>
    );
}

export default Dashboard;