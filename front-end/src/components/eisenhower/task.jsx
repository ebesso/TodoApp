import React, {Component} from 'react'
import styled from 'styled-components'

class Task extends Component{
    

    render(){

        const Container = styled.div`

            border: 0.5px solid black;
            padding: 20px;
            margin-top: 5px;    
        `

        const Label = styled.label`
        
            vertical-align: bottom;
            margin-left: 5px;
                                        
        `

        return(
            <Container>
                <input type='checkbox' id='checkbox' onChange={() => {this.props.removeTask(this.props.taskID)}}/>    
                <Label htmlFor='checkbox'>{this.props.label}</Label>
            </Container>
        )
    }

}

export default Task