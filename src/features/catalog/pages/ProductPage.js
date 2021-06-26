import React from 'react';
import PropTypes from 'prop-types';

import {Redirect} from "react-router";

import {useParams} from "react-router";

export function ProductPage() {

    const { id } = useParams()


    return (
        <div className="page">

        </div>
    );
}

ProductPage.propTypes = {};
