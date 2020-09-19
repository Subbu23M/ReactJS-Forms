// Form Part-2
import React from 'react'

// Class Component Called Foorm
class Foorm extends React.Component{
    constructor(){
        super()
        this.state ={
            isFriendly:false,
            gender:'',
            favColor:''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event){
        const{name,value,type,checked} = event.target
        // Ternary Operator
        type === 'checkbox' ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }

    render(){
        return(
            <form>

                <textarea 
                    rows='10' cols='20' 
                    value='Enter Your Text'
                    onChange={this.handleChange}
                />

                <br/>

                <label>

                    <input 
                        type='checkbox' 
                        name='isFriendly'
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />Are You Ok?

                </label>

                <br/>

                <label>

                    <input 
                        type='radio' 
                        name='gender'
                        value='male'
                        checked={this.state.gender ==='male'}
                        onChange={this.handleChange}
                    />Male

                </label>

                <br/>

                <label>

                    <input 
                        type='radio' 
                        name='gender'
                        value='female'
                        checked={this.state.gender ==='female'}
                        onChange={this.handleChange}
                    />Female

                </label>

                <br/>

                <label>Favourite Color:</label>

                <select 
                    name='favColor'
                    value={this.state.favColor}
                    onChange={this.handleChange}>

                    <option value='red'>Red
                    </option>

                    <option value='blue'>blue
                    </option>

                    <option value='black'>black
                    </option>

                    <option value='yellow'>yellow
                    </option>

                    <option value='pink'>pink
                    </option>

                    <option value='whitesmoke'>whitesmoke
                    </option>

                </select>

                <h1>
                    You are a <br/>{this.state.gender}
                </h1>

                <h2>
                    Your Favourite Color is: {this.state.favColor}
                </h2>

            </form>
        )
    }
}
// Used exp snippet
export default Foorm