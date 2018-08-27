import React from 'react'

class Image extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }
    render() {
        return <img src={this.props.imgSrc}/>
    }
}

export default Image