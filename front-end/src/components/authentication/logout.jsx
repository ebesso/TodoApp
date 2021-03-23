import React, {Component} from 'react'
import {GoogleLogout} from 'react-google-login'

const clientID = '850144694434-3sadccsasht9bn1mfvsloje28vvd8u9b.apps.googleusercontent.com'

class Logout extends Component{

    onLogoutSuccess = () =>{
        alert('You have been logged out')
    }

    render(){
        return(

            <div>
                <GoogleLogout
                
                    clientId={clientID}
                    buttonText='Logout'
                    onLogoutSuccess={this.onLogoutSuccess}

                />
            </div>

        )
    }
}

export default Logout