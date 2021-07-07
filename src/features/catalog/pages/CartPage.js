import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";


export function CartPgae() {
    const items = useSelector(state => state.settings.selectItems)


    console.log(items.typeof)
    console.log(items)

    return (
        <div className="page">
            {/*{items.map((item, index) => (*/}
            {/*    <p key={index}>Hello, {item.title}</p>*/}
            {/*))}*/}
        </div>

    );
}

CartPgae.propTypes = {};
