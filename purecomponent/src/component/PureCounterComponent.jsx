import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {

    constructor(){
        super()
        this.state = {
            toggle : false,
            count : 0
        }
    }

    render() {
        console.log("This is Pure Component")
        const {count , toggle} = this.state

        let handleClick = () =>{
            if (toggle){
                this.setState({
                    count : count + 1
                })
            }
        }

        return (
            <div>
                <h2>Pure Component</h2>
                <h3>{count}</h3>

                <button onClick={()=>{this.setState({toggle : !toggle})}}>Set Toggle</button>
                <button onClick={handleClick}>Counter</button>
            </div>
        )
    }
}