// pages/Home.js
import React, {Component} from 'react';

import Like from '../components/Like';

//React.Component === Component
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeLikes : 1000
        }
    }

    reset = (e) => {
        console.log("reset")
        this.setState({
            homeLikes: 0
        })
    }

    componentWillUnmount() {
        console.log("Home component will unmount")
    }


    render() {
        console.log("Home render")
        return (
            <div>
                <h2>Home Page</h2>
                <h2>Liked by {this.state.homeLikes} people</h2>

                <button onClick={this.reset}>Reset</button>

                <Like pageName="Home" likes={this.state.homeLikes} />
            </div>
        )
    }
}

export default Home;