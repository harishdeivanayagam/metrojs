# Metro.js
### An alternative to intertia.js for django
![enter image description here](https://i.ibb.co/WDF3j8k/pexels-luca-nardone-3651816.jpg)
## Why is intertia.js?
We believe intertia.js is a very good library for building web-apps with your favorite front-end library without compromising your productivity without complex rest-endpoints for simple application. Using Inertia.js you can build a traditional monolith with laravel/rails and bind the view layer with React/Vue/Svelte. 
## What is Metro.js and Why?
Our team love inertia.js but the inavailablity of it's support to django led us develop a new library similar to inertia.js that works with django.
## Frontend support for Metro.js
Metro.js supports react 16.
## How Metro.js works?
![Mertro.js Architecture](https://i.ibb.co/kDXBCWC/Metro.png)

 1. Metro.js consists of a django Adapter that helps to render the
    react_base.html.
2. Metro.js needs webpack setup and has dependency for turbolinks to make routing.
3. react_loader.js file consists of bootstrap() that is the entry point of the metro.js app.
4. Pages are placed in page folder. **props.params** helps you access django template variables.

# Getting Started

## Installation

 1. Add the metro-js folder into root static folder.  
 2. Add the react and react-dom.
 3. Setup webpack and webpack-cli
 4. Add metro_adapter.py to your root django-app.
## webpack.config.js
```javascript
const path = require('path');  
      
    module.exports = {  
        entry: {  
            react_loader: './src/react_loader.js'  
      },  
      mode: 'development',  
      output: {  
            filename: '[name].js',  
      path: path.resolve('./', 'generated')  
        },  
      module: {  
           rules: [{  
                test: /\.(js|jsx)$/,  
			    exclude: /node_modules/,  
			    use: {  
                    loader: "babel-loader"  
			    }  
            }]  
        }  
    }
```

## .babelrc

    ```javascript
    {  
      "presets": [  
        "@babel/preset-env",  
	    "@babel/preset-react"  
      ]  
    }

    
    ```
## react_loader.js

   ```javascript
   import React from "react"  
    import ReactDOM from "react-dom"  
    import {NotFound} from "./pages/notfound";  
    import {Home} from "./pages/home";
      
    const pageName = document.getElementById('page-name').innerHTML;  
    const pageParams = document.getElementById('page-params').innerHTML;  
      
    // Your routes go here
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
   ```
## Metro Components
### Metro Forms
Todo Example

**Props**
 - method (GET/POST/PUT/DELETE)
 - data (form data)
 - action - URL of 
 - afterSubmit - receives **2 arguments** -> res (response), err (error). Response is null when error and vice-versa

    ```javascript
    <MetroForm 
        method="POST" 
        action="/todos/" 
        data={{name: newTodo}} 
        afterSubmit={(res,err)=>{console.log(res);console.log(err)}}
    >  
	    <h1>Create Todo</h1>  
	    <input onChange={(e)=>{setNewTodo(e.target.value)}} placeholder="Enter Value"/>  
		<button value="submit">Create</button>  
    </MetroForm>

    ```
### Metro Station

Metro Station is a nice binding between React and Turbolinks.

    ```html
    <MetroStation to="/todos/">Go To Todos</MetroStation>
    ```


## External Dependencies

 - [ ] React 16+
 - [ ] Turbolinks 5.2
 - [ ] Axios 0.19

## Notes
This is a initial version of the library. Use at your own risk in production.

Made by Harish with ❤️ from India.
