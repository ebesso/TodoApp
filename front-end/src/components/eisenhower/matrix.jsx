import React, {Component} from 'react'
import Category from './category'

class Matrix extends Component{



    render (){
        return (
            <div style={{position: 'absolute', left:'5%', right: '5%'}}>
                <Category tasks={this.props.tasks.first} label={this.props.label.first + ', ' + this.props.label.second} category='first' addTask={this.props.addTask} removeTask={this.props.removeTask}/>
                <Category tasks={this.props.tasks.second} label={this.props.label.first + ', Not ' + this.props.label.second} category='second' addTask={this.props.addTask} removeTask={this.props.removeTask}/>
                <Category tasks={this.props.tasks.third} label={'Not ' + this.props.label.first + ', ' + this.props.label.second} category='third' addTask={this.props.addTask} removeTask={this.props.removeTask}/>
                <Category tasks={this.props.tasks.forth} label={'Not ' + this.props.label.first + ', Not ' + this.props.label.second} category='forth' addTask={this.props.addTask} removeTask={this.props.removeTask}/>
            </div>
        )
    }

}

export default Matrix