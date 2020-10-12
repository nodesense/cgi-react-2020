// App.js, means that it is a component called App
// import from node_modules
import React from 'react'; // JSX

// import from relative path
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';


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
                <Home ></Home>
                <About founders= { ['Venkat', 'Krish'] }
                       branches = { { headOffice: {city: 'BLR'}, branchOffice: {city: 'Chennai'} }   } 
                />
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