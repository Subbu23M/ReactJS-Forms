// Form Part-1
import React from 'react'

// Class Component called Form
class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName:'',
            emailId:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const{name,value} = event.target
        
        this.setState({
            // firstName:event.target.value,
            // lastName:event.target.value

            // [event.target.name] : event.target.value
            [name] : value
        })
    }

    render(){
        return(
            <form>

                <input 
                    type='text' 
                    placeholder='firstName' 
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />

                <br/>

                <input 
                    type='text' 
                    placeholder='lastName' 
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />

                <br/>

                <input 
                    type='email' 
                    placeholder='subbuvenkat2495@gmail.com' 
                    name='emailId'
                    value={this.state.emailId}
                    onChange={this.handleChange}
                />

                <h1>
                    {this.state.firstName}
                    {this.state.lastName}
                    {this.state.emailId}

                </h1>
            </form>
        )
    }
}
export default Form