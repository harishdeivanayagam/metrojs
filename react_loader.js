import Bootstrap from "./metro-components/react_config";
import {goBack} from "./metro-components/goBack";

const pageName = document.getElementById('page-name').innerHTML;
const pageParams = document.getElementById('page-params').innerHTML;

Bootstrap(pageName, pageParams);

window.addEventListener('popstate', function(event) {
  goBack(document.location.pathname);
});
