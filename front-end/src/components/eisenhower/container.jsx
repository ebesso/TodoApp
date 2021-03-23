import React, {Component} from 'react'
import Matrix from './matrix'
import Popup from './popup'

class Container extends Component{
    
    state = {
        label: {
            first: 'Important',
            second: 'Urgent'
        },
        tasks: {
            first: [],
            second: [],
            third: [],
            forth: []
        },
        showPopup: false,
        category: ''

    }

    removeTask = (category, id) => {
        var tasks = this.state.tasks
        
        switch(category){
            case 'first':
                tasks.first.splice(tasks.first.findIndex(x => x.id === id), 1)
                break
            case 'second':
                tasks.second.splice(tasks.second.findIndex(x => x.id === id), 1)
                break
            case 'third':
                tasks.third.splice(tasks.third.findIndex(x => x.id === id), 1)
                break
            case 'forth':
                tasks.forth.splice(tasks.forth.findIndex(x => x.id === id), 1)
                break
            default:
                break
        }

        this.setState({tasks: tasks})
    }

    addTask = (category) =>{
        this.setState({showPopup: true, category: category})
    }

    closePopup = () => {
        this.setState({showPopup: false})
    }

    submitTask = (label) => {
        var tasks = this.state.tasks;

        switch(this.state.category){
            case 'first':
                tasks.first.push({label: label, id: tasks.first.length})
                break
            case 'second':
                tasks.second.push({label: label, id: tasks.second.length})
                break
            case 'third':
                tasks.third.push({label: label, id: tasks.third.length})
                break
            case 'forth':
                tasks.forth.push({label: label, id: tasks.forth.length})
                break
            default:
                break
        }

        this.setState({tasks: tasks, showPopup: false})
    }

    render(){

        return (
            <div>
                <Matrix tasks={this.state.tasks} label={this.state.label} addTask={this.addTask} removeTask={this.removeTask}/>
                
                {(this.state.showPopup) && 
                    <Popup closePopup={this.closePopup} submitTask={this.submitTask}/>
                }
            </div>
        )
    }
}

export default Container