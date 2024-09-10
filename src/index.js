import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import App from './App'; 

const Root = () => {
    return (
        <App />
    )
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
