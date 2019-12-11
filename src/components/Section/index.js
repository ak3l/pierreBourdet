import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import img from '../../img';

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container mb-4">
            <div className="row justify-content-start">
                <div className="col-9 text-center">
                    <p className="h5 mr-3">{title}</p>
                </div>
                <div className="col-3">
                    <span className="border pb-1">
                        <Button
                            color="link"
                            size="sm"
                            onClick={toggle}
                            style={{ marginBottom: '2px' }}>
                            {!isOpen ? (
                                <img alt="chevrondown" src={img.chevron.up} />
                            ) : (
                                <img alt="chevronup" src={img.chevron.down} />
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
