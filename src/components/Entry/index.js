import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ date, title, img, location, line1, line2, line3 }) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="font-weight-bold">{date}</div>
                </div>
                <div className="col-sm-7 col-12">
                    <img className="border float-left" alt="hn" src={img} height="35" width="35" />
                    <span className="h6 ml-2">{title}</span><br/>
                    <span className="small text-secondary ml-2">{location}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 offset-sm-4 mb-2">
                    <div className="mb-1">
                        {line1}<br/>
                        {line2}<br/>
                        {line3}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Entry.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
};

export default Entry;
