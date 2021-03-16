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
                </ul>
            </nav>
        )
    }
}

export default Navbar;