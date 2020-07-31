import React from "react"
import ReactDOM from "react-dom"
import {NotFound} from "./pages/notfound";
import {Home} from "./pages/home";


const pageName = document.getElementById('page-name').innerHTML;
const pageParams = document.getElementById('page-params').innerHTML;


function assignPage(pageName) {
    let PageComponent = NotFound;

    switch (pageName) {
        case 'home':
            PageComponent = Home;
            break;
        default:
            PageComponent = NotFound;
            break;
    }

    return PageComponent;
}

function bootstrap() {

    let PageComponent = assignPage(pageName);

    ReactDOM.render(
        <PageComponent params={JSON.parse(pageParams)}/>,
        document.getElementById("react-root")
    )
}

bootstrap();
