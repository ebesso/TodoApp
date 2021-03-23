import React, {Component} from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Popup extends Component{
    
    submit = (e) => {
        e.preventDefault()
        this.props.submitTask(e.target[0].value)
    }

    render(){

        const Background = styled.div`

            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0, 0.5);
        `

        const Form = styled.form`
            position: absolute;
            top: 25%;
            bottom: 25%;
            left: 25%;
            right: 25%;

            border-radius: 2px;
            border: solid black 1px;

            background: white;

        `
        return(
            <Background>
                <Form onSubmit={this.submit}>
                <a href='#' onClick={this.props.closePopup} style={{color: 'inherit', position: 'absolute', right: '2%', top: '2%'}}><FontAwesomeIcon icon={faTimes}/></a>

                    <center>
                        <h3>Add Task</h3>
                        <label>Title</label><br/>
                        <input type='text'/><br/>
                        <div style={{position: 'absolute', left: '30%', right: '30%', bottom: '0'}}>
                            <input type='submit' value='Add' style={{width: '100px'}}/>
                        </div>
                        
                    </center>

                </Form>
            </Background>


        )
    }

}

export default Popup