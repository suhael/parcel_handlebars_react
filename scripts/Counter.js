import React from 'react'
import PropTypes from 'prop-types';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: props.count || 0
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    } 

    render() {
        const {count} = this.props
        return (
            <div>
                <h1>{this.state.count}</h1>
                <span onClick={() => this.increment()}>+</span>
            </div>
        )
    }

}

Counter.propTypes = {
    count: PropTypes.number
}


export default Counter;