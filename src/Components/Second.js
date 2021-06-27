import React from 'react'
import './Styles/components.css';

export class Second extends React.Component{

    constructor(){
        super();
       
    }
    render(){
       
        let code = this.props.things.map(x=><li key={x}>{x}</li>);
        return(
            <div className="box">
                <h4>{this.props.title}</h4>
                <hr/>
                <ul>
                    {code}
                </ul>
            </div>
        )
    }
}

Second.defaultProps = {
    title:"notitle",
    things:[]
}
