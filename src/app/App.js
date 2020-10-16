// App.js, means that it is a component called App
// import from node_modules
import React from 'react'; // JSX

// import from relative path

// commenting, since we have container component
// import Header from './components/Header';

// Header containers, wrap the actual Header component
import Header from './containers/Header';

import Footer from './components/Footer';

import AuthRoute from './components/AuthRoute';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Checkout from './cart/pages/Checkout';
import Contact from './pages/Contact';

import PageCounter from './pages/PageCounter';
import Favorites from './pages/Favorites';


// FIXME: Lazy load cart using router
import Cart from './cart/pages/Cart';
import ProductList from './pages/ProductList';

import ProductEdit from './pages/ProductEdit';

import {Route, Switch} from 'react-router-dom';

import ThemeContext from './contexts/Theme';

// composition of components, not HTML TAGS
// parent, child

// class component

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "pink"
        }
    }

    setTheme(theme) {
        this.setState({theme})
    }
    // react keyword
    // create and return v.dom, must
    render() {
        console.log('App Render');

        return (
            <div>
                {/* provider override the default values */}
                <ThemeContext.Provider value={this.state.theme}>
                {/* comments here, html comments doens't work in jsx */}
                {/* App is parent, header, fooer, about, home are chilren */}
                <button style = { {background: 'lightblue'}}
                        onClick={ () => this.setTheme("lightblue")}
                > Blue </button>

                <button style = { {background: 'pink'}}
                         onClick={ () => this.setTheme("pink")}
                > Pink 
                </button>

                <button style = { {background: 'green'}}
                        onClick={ () => this.setTheme("green")}
                > Green </button>
                
                <Header appTitle="ShopX" />

                {/* if more than one route matches, then all matching routes are 
                    displayed 

                    Adding Switch solve this problem,
                    Switch picks the first match
                */}

                {/* by default path uses startsWith pattern for matching
                    by adding exact property, it uses exactly equal to
                */}

                <Switch>
                    <Route path="/" exact component={Home} />

                    {/* to pass props to component */}
                    <Route path="/cart"
                           render={ ( props =>  <Cart {...props} /> ) }
                    >
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/checkout">
                        <Checkout />
                    </Route>

                    {/* <Route path="/products">
                        <ProductList />
                    </Route> */}

                    <AuthRoute path="/products" exact component={ProductList} />

                    <Route path="/products/edit/:id"
                           render = {(props) => ( <ProductEdit {...props} /> )} />

                    <Route path="/page-counter">
                        <PageCounter />
                    </Route>

                    <AuthRoute path="/favorites" component={Favorites} />

                    {/* <Route path="/favorites">
                        <Favorites />
                    </Route> */}

                    <Route path="/login">
                        <h2>Login now</h2>
                        <p>Enter your credential</p>
                    </Route>



                    {/* pass props and router props to component, preffered method */}
                    <Route path="/about"
                        render= { (props) => (<About founders= { ['Venkat', 'Krish'] }
                                                        branches = { { headOffice: {city: 'BLR'}, branchOffice: {city: 'Chennai'} }   } 
                                                    />) }
                    />

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>

                {/* <Cart /> */}

                {/* <Home ></Home>

                <About founders= { ['Venkat', 'Krish'] }
                       branches = { { headOffice: {city: 'BLR'}, branchOffice: {city: 'Chennai'} }   } 
                />
                 */}

                {/* showAddress passed as boolean true 
                 company="Training" is defauled in Footer
                */}
                <Footer appTitle="ShopX" 
                        year={2020}
                        
                        showAddress
                >
                {/* content children, react passes this content as props.chidlren */} 
                <p> Contact Time: 9:30 AM to 5:30 PM</p> 
                <p> Sat/Sun Holiday</p>
                </Footer>
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default App;