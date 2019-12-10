import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import img from '../../img';

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container mb-3">
            <div className="row justify-content-start">
                <div className="col-9 text-center">
                    <p className="h5 mr-3">{title}</p>
                </div>
                <div className="col-3">
                    <span className="border pt-2">
                        <Button
                            color="link"
                            size="sm"
                            onClick={toggle}
                            style={{ marginBottom: '1rem' }}>
                            {!isOpen ? (
                                <img alt="chevrondown" src={img.chevron.down} />
                            ) : (
                                <img alt="chevronup" src={img.chevron.up} />
                            )}
                        </Button>
                    </span>
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>{children}</CardBody>
                </Card>
            </Collapse>
        </div>
    );
};

export default Section;
