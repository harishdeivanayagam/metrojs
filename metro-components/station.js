import React from 'react';
import {makeTrip} from "./makeTrip";

export const MetroStation = (props) => {

    return (
        <div>
            <a onClick={(e)=>{makeTrip(e,props.to, 'NEXT')}} href={props.to}>{props.children}</a>
        </div>
    )
}
