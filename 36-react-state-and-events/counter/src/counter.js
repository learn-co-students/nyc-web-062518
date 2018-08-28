import React, {Component} from 'react'

class Counter extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { currentNumber:0 }
    //     this.add = this.add.bind(this)
    //     this.subtract = this.subtract.bind(this)
    // }

    state = { currentNumber: 0 }

    add = () => this.setState(state => { return { currentNumber: state.currentNumber + 1 } })

    subtract = () => {
        this.setState(state => {
            if (state.currentNumber > 0) {
                return{currentNumber: state.currentNumber - 1}
            } else {
                alert('You hit rock bottom')
            }
         })
    }

    render() {
        return (
        <div>
            <p>{this.state.currentNumber}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
        </div>
        )
    }
}

export default Counter