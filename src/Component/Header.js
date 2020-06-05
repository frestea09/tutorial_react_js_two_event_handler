import React from 'react'

const Header = props => {
    const sayHello = () =>{
        alert('Hello ganteng')
    }
    return(
        <div>
            <h3>Hello {props.name}</h3>
            {props.children}
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}
export default Header