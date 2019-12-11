import React from 'react';
const Entry = ({ date, title, img, location, children }) => {
    return (
        <React.Fragment>
            <div className="row">
                {date && (<div className="col-12 col-sm-4">
                    <div className="font-weight-bold">{date}</div>
                </div>)}
                <div className="col-sm-7 col-12">
                    {img && (<img className="border float-left mr-2 mt-1"
                                       alt="hn" src={img}
                                       height="35"
                                       width="35" />)}
                    <span className="h6">{title}</span><br/>
                    <span className="small text-secondary">{location}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 offset-sm-4 mb-3">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Entry;
