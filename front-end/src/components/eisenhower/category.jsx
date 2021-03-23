import React, {Component} from 'react'
import styled from 'styled-components'
import Task from './task'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class Category extends Component{
    render(){


        const Container = styled.div`
            width: 45%;
            height: 200px;

            border: 0.5px solid black;

            padding: 20px;
            display: inline-block;
            vertical-align: top;
        `

        const List = styled.ul`
            list-style-type: none;  
            padding-left: 0px;
            margin-bottom: 0px;
            max-height: 160px;
            overflow: scroll;

        `

        const Label = styled.p`

            margin-top: 1px;

        `
        var tasks = []

        for(var i = 0; i < this.props.tasks.length; i++){
            
            var label = this.props.tasks[i].label
            var taskID = this.props.tasks[i].id

            tasks.push(<li key={i}><Task label={label} taskID={taskID} removeTask={(id) => {this.props.removeTask(this.props.category, id)}}/></li>)
        }

        return(
            <Container>
                <Label>{this.props.label} <a href='#' onClick={() => {this.props.addTask(this.props.category)}} style={{color: 'inherit'}}><FontAwesomeIcon icon={faPlus} style={{float: 'right'}}/></a></Label>
                <List>

                    {tasks}

                </List>
            </Container>
        )
    }

}

export default Category