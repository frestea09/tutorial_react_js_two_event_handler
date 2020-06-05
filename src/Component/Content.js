import React from 'react'

class Content extends React.Component{
    constructor(){
        super()
        this.state = {
            name : 'ilman',
            count : 0
        }
    }
    sayHelloClass(){
        alert('hello from class')
    }
    tambahBilangan(){
        this.setState(
            {
                count : this.state.count + 1
            },
        )
    }
    render(){
        return(
            <div className='content'>
                <p>Hallo Nama saya ilman teguh prasetya.</p>
                <p>Count : {this.state.count}</p>
                <button onClick={this.sayHelloClass}>Hello Class</button>
                <button onClick={()=>{
                    this.tambahBilangan()
                }}>Count</button>
            </div>
        )
    }
}
export default Content