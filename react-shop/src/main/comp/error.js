import React , {Component} from 'react'

class Error extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return (
            <div>
                <div className="container">
                    <img src={require("../imgs/err.png")}/>
                </div>
            </div>
        )
    }
}

export default Error;