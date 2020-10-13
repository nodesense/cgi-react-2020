// App.js, means that it is a component called App
// import from node_modules
import React from 'react'; // JSX

// import from relative path
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// FIXME: Lazy load cart using router
import Cart from './cart/pages/Cart';

import {Route, Switch} from 'react-router-dom';

// composition of components, not HTML TAGS
// parent, child

// class component

class App extends React.Component {
    // react keyword
    // create and return v.dom, must
    render() {
        console.log('App Render');

        return (
            <div>
                {/* comments here, html comments doens't work in jsx */}
                {/* App is parent, header, fooer, about, home are chilren */}

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

                    <Route path="/cart">
                        <Cart />
                    </Route>

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
                        ></Footer>
            </div>
        )
    }
}

export default App;