import ReactDOM from "react-dom";
import React, {Component} from "react";
import {style} from './style.css';
import './style.css';

class Hello extends Component{
    render(){
        return(
            <div className="hello">
                Hello Webpack or React！！！
            </div>
        );
    }
}

ReactDOM.render(<Hello />,document.getElementById('root'));