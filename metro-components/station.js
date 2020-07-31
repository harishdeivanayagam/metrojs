import React from 'react';

export const MetroStation = (props) => {
    return (
        <div>
            <a href={props.to}>{props.children}</a>
        </div>
    )
}