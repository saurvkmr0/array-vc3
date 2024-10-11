import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

PageTitle.propTypes = {
    title: PropTypes.string
};

function PageTitle(props) {
    const {title} = props;
    return (
        <section className="page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div className="breadcrumbs" data-aos="zoom-in" data-aos-duration="800">
                                <h1>{title}</h1>
                            </div>            
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;