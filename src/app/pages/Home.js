// pages/Home.js
import React, {Component} from 'react';

import Like from '../components/Like';

// Promise - ES6 - standard
// used in async context
// Promise class
//   resolve
//   reject
//  proposal - cancel/reject a promise - finalized, abontoned*


// async function//ajax/setTimeout etc
// deferred execution
// the caller hold the promise till the promise either resolved or rejected
function luckyEven() {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            let n = Math.ceil(Math.random() * 100);
            console.log("number generated ", n)
            if (n % 2 == 0) {
                // luckey number should be returned
                 resolve(n); // success
                 
            }
            else {
                // send an error message
                 reject("I am sorry. better luck next time")
            }
        }, 5000)
    } );
    return promise;
}

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

    testPromise = () => {
        console.log("making call to luckyEven")
        const promise = luckyEven()
        console.log("made call to luckyEven")
        promise.then ( (value) => { // then will be called when promise.resolve called
            console.log("Then Yey, won lotter", value)
        })
        .catch( (error) => { // when promise.reject called
            console.log("Catch  :-( error ", error)
        })
        .finally ( () => {
            // resource, memory, gc cleanup
            console.log("Promise finally..")
        })
        console.log("testPromise exit")
    }

    // Promise.all
    testPromise2 = () => {
        // reference of promises to be resolved then it calls then()
        // else call catch() even if one promise failed
        Promise.all([
            luckyEven(), // return a promise
            luckyEven(), // return a promise
        ])
        .then ( results => { // called if both promises are resolved
            console.log("lucky twice")
            console.log("result 0", results[0])
            console.log("result 1", results[1])
        })
        .catch ( (error) => {
            console.log("Call failed ", error)
        })
    }


    render() {
        console.log("Home render")
        return (
            <div>
                <h2>Home Page</h2>
                <h2>Liked by {this.state.homeLikes} people</h2>

                <button onClick={this.reset}>Reset</button>

                <button onClick={this.testPromise}>Test Promise</button>
                <button onClick={this.testPromise2}>Test Promise2</button>


                <Like pageName="Home" likes={this.state.homeLikes} />
            </div>
        )
    }
}

export default Home;