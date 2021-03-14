import React, {Component} from 'react'
import Social from '../components/Social'
// import profilepic from '../images/tiva.jpg'
import ReactTypingEffect from 'react-typing-effect'

var profileice = "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/97997755_1427811050749968_5505866074509279232_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeExYbQbQTZHR4YZOKabG-tnTgx_dNC-wO1ODH900L7A7drEBySRSzIwQ1Xw6YRes_YAuDs02V0JOrgPDHIf470Y&_nc_ohc=z_HUgDGNKFAAX_sgbWV&_nc_ht=scontent.fbkk13-1.fna&oh=b7f8db1e48f416224c778d039b675b98&oe=6073403B"

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profileice} alt="profile" className="profilepic"/>
                <ReactTypingEffect
                    className="typingeffect"
                    text={['I am Tiva Wongratkatanyoo', 'I am Developer']}  
                    speed={100} 
                    eraseDelay={200} 
                />
                <Social /> 
            </div>
        )
    }
}

export default Home;