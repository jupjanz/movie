import React, { Component } from 'react'
import { requestGetData } from '../actions/users'
import {connect} from 'react-redux'


class User extends Component {
    // constructor(props) {
    //     super(props)

    // }

   async componentDidMount() {
        await this.props.requestGetData()
    }

    render() {
        const {user} = this.props.users
        return (
            <div>
            {user.map((item,idx) => (
                <h2 key={item.id}>{item.name}</h2>
            ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users
})

const bindActions = () => dispatch => {
    return {
        requestGetData: () => dispatch(requestGetData())
    }
}

export default connect(mapStateToProps,bindActions) (User)