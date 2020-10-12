// pages/Home.js
import React, {Component} from 'react';

import Like from '../components/Like';

//React.Component === Component
class Home extends Component {
    render() {
        console.log("Home render")
        return (
            <div>
                <h2>Home Page</h2>

                <Like pageName="Home" likes={1000} />
            </div>
        )
    }
}

export default Home;