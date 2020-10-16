// pages/Like.js
import React from 'react';
import PropTypes from 'prop-types';

// Props? Data passed from parent to child, parent own the data, child consume the data, child should not modify the data

// State, is for a component to have its own data which can be mutable/update/modify...

class Like extends React.Component {
    // stage-3
    // propTypes, defaultProps can be static field
    static propTypes = {
        likes: PropTypes.number.isRequired,
        pageName: PropTypes.string
    }

    // default
    static defaultProps = {
        likes: 0,
        pageName: "Page"
    }

    // initial props are passed in constrctor
    // then binded to this.props, updated everytime parent re-render
    constructor(props) {
        // first should invoke parent constructor if inherited
        // always good to pass props to parent
        super(props); // base class constructor
        console.log("like cons", props)
        console.log("like cons this.props ", this.props)

        // state is keyword, it shoud be object, can have key/value pair
        // state can be changed using setState, shoud not be changed directly using reference
        // this.state SHOULD NOT be mutated directly, always use setState
        // state is applicable only for class component. 
        // constructor is a good place to initialize default values
        // can be initialized with props passed as argument
        this.state = {
            likeCounter : props.likes , // initialize state with props value
        }
    }

    up(e) {
        console.log("up event", e);
        console.log("This ", this)

        //BAD, mutating state directly
        //this.state.likeCounter++
        //this.state.likeCounter += 1

        // GOOD Part, setState
        // setState is async func
        // new value is not effective immediately
        // but it will be effective before calling render function
        // setState trigger render function after the current state updated
        console.log("LikeCounter before setState ", this.state.likeCounter)
        // NOT RECOMMENDED if the code has side effects
        this.setState({
            likeCounter: this.state.likeCounter + 1
        })
        console.log("LikeCounter after setState ", this.state.likeCounter)

        // SIDE EFFECT, try increaing value twice/depencency, this WILL NOT WORK
        console.log("LikeCounter before setState ", this.state.likeCounter)
        // NOT RECOMMENDED if the code has side effects
        this.setState({
            likeCounter: this.state.likeCounter + 1
        })
        console.log("LikeCounter after setState ", this.state.likeCounter)

    }

    // alternative, best practice to handle two problems
    // 1. binding this =>
    // 2. ensuring that only one instance of function created
    // ES.NEXT [stage 3]
    down = (e) => {
        console.log("down event", e);
        console.log("This", this)

        // functional setState, GOOD and recommended approach
        // good  for dependent, side effects
        // setState(function as input) function(nextState, props), return new state
        // remember, this also async, the state is not effective immediately
        // nextState {likeCounter: 1000}
        this.setState ( (nextState, props) => {
            console.log("setState functional, nextState ", nextState)
            // return new State {likeCounter: 999}
            return {
                likeCounter: nextState.likeCounter - 1
            }
        })

        // Side effect, reactive changes, -1 twice, WILL WORK
        // returned new state from previous functional setstate passed as nextState here
        // nextState {likeCounter: 999}
        this.setState ( (nextState, props) => {
            console.log("setState functional, nextState ", nextState)
            //return new State {likeCounter: 998}, this will be set to this.state later
            return {
                likeCounter: nextState.likeCounter - 1
            }
        })
         
    }

    up2 = (e) => {
        // to understand how to handle side effects using react setState callback
        // NOT RECOMMENEDED due to rerender
        console.log("up2 state", this.state)
        this.setState({
            likeCounter: this.state.likeCounter + 1
        }, () => {
            // callback called after the render function
            // state is updated
            // drawback: render will be called twice
            console.log("up2 callback called", this.state)
            // async
            this.setState({
                likeCounter: this.state.likeCounter + 1
            })
        })
    }

    eventEx = () => {
        console.trace(); // print callstack, don't use in production
    }


    // return new state if any, return null/undefined if no change
    // is called before render duing creation/initial mounting, or updates
    static getDerivedStateFromProps(props, state) {
        console.log("Like getDerivedStateFromProps called ")
        console.log("state", state)
        console.log("props", props)

        return null;
    }
 

    // render is called multiple times
    // 1. when component created, mouting life cycle
    // 2. whenever this.forceUpdate, this.setState called on update cycle
    // 3. whenever parent render called on update cycle
    // whenever render called, new virtual doms created, diffed, if any diff, patched with real dom
    render() {
        console.log("Like Render called")
        console.log("Like render props ", this.props)
        console.log("LikeCounter in render   ", this.state.likeCounter)

        const {pageName, likes} = this.props;
        return (
            <div>
                <p>{pageName} Likes: {likes}</p>
                <p> likeCounter {this.state.likeCounter} </p>

                <button onClick={this.eventEx}>Event Trace</button>
                {/* we pass a function reference to react without this context, 
                    react call the fucntion ref without object context, this is undefined */}
                <button onClick={this.up}> +1 this ERROR </button>
                {/* => ensure that this is from lexical scope, ie class scope
                    => function is created for every re-render
                    generally avoid using => in render function as it may be created many times
                        creates functions many times, cause issue pure component
                */}
                <button onClick={ (e) => this.up(e) }> +1/this working, not recommended</button>
                <button onClick={this.up2}> +1/this working, but calls render twice</button>

                <button onClick={this.down}>-1 this working,GOOD</button>
            </div>
        )
    }
}

export default Like;