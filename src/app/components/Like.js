// pages/Like.js
import React from 'react';
import PropTypes from 'prop-types';

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
    }

    up(e) {
        console.log("up event", e);
        console.log("This ", this)
    }

    // alternative, best practice to handle two problems
    // 1. binding this =>
    // 2. ensuring that only one instance of function created
    // ES.NEXT [stage 3]
    down = (e) => {
        console.log("down event", e);
        console.log("This", this)
    }

    render() {
        console.log("Like render props ", this.props)
        const {pageName, likes} = this.props;
        return (
            <div>
                <p>{pageName} Likes: {likes}</p>
                {/* we pass a function reference to react, 
                    react call the fucntion ref without object context, this is undefined */}
                <button onClick={this.up}> +1 this ERROR </button>
                {/* => ensure that this is from lexical scope, ie class scope
                    => function is created for every re-render
                    generally avoid using => in render function as it may be called many times
                        creates functions many times, cause issue pure component
                */}
                <button onClick={ (e) => this.up(e) }> +1/this working, not recommended</button>

                <button onClick={this.down}>-1 this working,GOOD</button>
            </div>
        )
    }
}

export default Like;