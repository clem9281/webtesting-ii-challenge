import React, { useState } from 'react';
import { Button } from "reactstrap";

const Dashboard = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className="dashboard pb-3 px-5 d-flex justify-content-between flex-wrap">
            <Button className="mt-3">Strike</Button>
            <Button className="mt-3">Ball</Button>
            <Button className="mt-3">Foul</Button>
            <Button className="mt-3">Hit</Button>
        </section>
    );
}

export default Dashboard;