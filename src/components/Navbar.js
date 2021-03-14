import React, {Component} from 'react';
import Navitems from './Navitems';

class Navbar extends Component {
    constructor(props){
        super(props); 
        this.state = {
            'NavItemActive' : ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/"></Navitems>
                    <Navitems item="About" tolink="/abount"></Navitems>
                    <Navitems item="Eduction" tolink="/eduction"></Navitems>
                    <Navitems item="Skills" tolink="/skills"></Navitems>
                    <Navitems item="Contact" tolink="/contact"></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;