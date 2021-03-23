import React, {Component} from 'react'
import {GoogleLogin} from 'react-google-login'

const clientID = '850144694434-3sadccsasht9bn1mfvsloje28vvd8u9b.apps.googleusercontent.com'
const clientSecret = 'VduWlfn__alJfJDAZK1HasVJ'

class Login extends Component{
    
    onSuccess = (res) => {
        console.log('Login sucessful. Current user: ', res.tokenObj)
    }
    onFailure = (res) => {
        console.log('Login Failed. Res: ', res)
    }

    render(){
        return(
            <React.Fragment>
                <h2>Login</h2>
                <div>
                    <GoogleLogin

                        clientId={clientID}
                        buttonText='Login'
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    
                    />
                </div>
            </React.Fragment>
        )
    }

}

export default Login