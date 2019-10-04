import React, { Component } from 'react'
import { onIncrement, onDecrement } from '../actions/counter'
import { connect } from 'react-redux'


// const action = (type) => store.dispatch({type})

class Counter extends Component {
  // constructor(props) {
  //   super(props)
  // }



  onClickIncrement = () => {
    this.props.dispatch(onIncrement(this.props.point))
  }

  onClickDecrement = () => {
    this.props.dispatch(onDecrement(this.props.point))
  }


  render() {
    return (

      <div>
        <h2>{this.props.point} </h2>
        <div>
          <button onClick={this.onClickIncrement}>
            increment
                  </button>
        </div>
        <div>
          <button onClick={this.onClickDecrement}>
            decrement
                  </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  point: state.counter.point
})


export default connect(mapStateToProps)(Counter)