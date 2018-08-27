import React from 'react'

function Header(props) {
    console.log(props)
    return <h1>{props.message}</h1>
}

export default Header