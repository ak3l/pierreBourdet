import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import chevrondown from '../../img/chevrondown.png'
import chevronup from '../../img/chevronup.png'

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    console.log(isOpen)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <span className="h3 mr-3">{title}</span>
                    <span className="border pt-2">
                    <Button color="link" size="sm" onClick={toggle} style={{ marginBottom: '1rem' }}>
                        {!isOpen ? (<img alt="chevrondown" src={chevrondown} />)
                            : (<img alt="chevronup" src={chevronup} />)}
                    </Button>
                    </span>

                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {children}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
};

export default Section;
