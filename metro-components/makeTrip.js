import axios from "axios";
import {getAjaxHeader} from "./getAjaxHeader";
import reactRender from "./react_config";

export const makeTrip = (e, to, action) => {
    if (action === "NEXT") {
        e.preventDefault();
        axios.get(to, {headers: getAjaxHeader})
            .then(res => {
                let resHTML = new DOMParser().parseFromString(res.data, "text/html");
                let newPageParams = resHTML.getElementById("page-params").innerHTML;
                document.getElementById("page-params").innerHTML = newPageParams;
                let newPageName = resHTML.getElementById("page-name").innerHTML;
                document.getElementById("page-name").innerHTML = newPageName;
                document.getElementById("page-title").innerHTML = newPageName;
                window.history.pushState({}, "", to)
                reactRender(newPageName, newPageParams);
            })
            .catch(err => {
                console.log(err)
            })
    }
    if (action === "BACK") {
        axios.get(to, {headers: getAjaxHeader})
            .then(res => {
                let resHTML = new DOMParser().parseFromString(res.data, "text/html");
                let newPageParams = resHTML.getElementById("page-params").innerHTML;
                document.getElementById("page-params").innerHTML = newPageParams;
                let newPageName = resHTML.getElementById("page-name").innerHTML;
                document.getElementById("page-name").innerHTML = newPageName;
                document.getElementById("page-title").innerHTML = newPageName;
                reactRender(newPageName, newPageParams);
            })
            .catch(err => {
                console.log(err)
            })
    }
}
