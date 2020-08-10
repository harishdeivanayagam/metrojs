import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";
import ReactDOM from "react-dom";
import React from "react";

function assignPage(pageName) {

    let PageComponent;

    switch (pageName) {
        case 'Home':
            PageComponent = Home;
            break;
        default:
            PageComponent = NotFound;
            break;
    }

    return PageComponent;
}

function reactRender(pageName, pageParams) {

    let PageComponent = assignPage(pageName);

    ReactDOM.render(
        <PageComponent params={JSON.parse(pageParams)}/>,
        document.getElementById("react-root")
    )

}

export default reactRender;