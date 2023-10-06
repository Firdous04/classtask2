import { Component } from "react";
import C3 from "./C3";

class C2 extends Component
{
    constructor()
    {
        super();
        console.log("I am constructor");
        this.state = {role:"Engineer", bool: true};
    }

    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }

    componentDidMount()
    {
        console.log("I am componentDidMount method");
    }

    shouldComponentUpdate()
    {
        console.log("I am shouldComponentUpdate method");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate()
    {
        console.log("I am componentDidUpdate method");
    }

    render()
    {
        console.log("I am render method");
        return(
            <div>
                <h1>Lifecycle methods</h1>
                <h1>Role - {this.state.role}</h1>
                <button onClick={()=>{this.setState({role:"Doctor"})}}>Change role</button>
                {  (this.state.bool)? <C3 /> : null  }
                <button onClick={()=>{this.setState({bool: false})}}>Unmount</button>
            </div>
        )
    }
}

export default C2;
