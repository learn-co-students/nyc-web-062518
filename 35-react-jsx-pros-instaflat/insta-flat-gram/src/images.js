import React from 'react'
import imagesUrls from './imagesUrls'
import Image from './image'

class Images extends React.Component {
    constructor(props) {
        super(props)
        //this.state = {}
    }
    render() {
        const imageComponents = imagesUrls.map((imageUrl, index) => <Image potato="Pancakes" key={index} imgSrc={imageUrl}/> )
        return <div>{imageComponents}</div>
    }
}

export default Images