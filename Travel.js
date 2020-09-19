// Travel Form Project From VSchool

import React from 'react'

class Travel extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName :'',
            lastName:'',
            ageNumber:'',
            isVegan : false,
            isKosher: false,
            isLactose : false,
            gender:'',
            locationTravelling:''
        } 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){

        const{name,value,type,checked} = event.target
        // Ternary Operator
        type ==='checkbox' ? this.setState({ [name] : checked }) : this.setState({ [name]:value })
    }     
        // firstName : event.target.value,
        // lastName : event.target.value
    
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
                    type='number' 
                    placeholder='Enter Your Age:'
                    name='ageNumber'
                    value={this.state.ageNumber}                    
                    onChange={this.handleChange}
                />

                <br/>

                <h2> Select Your Diet Plan:</h2>

                <label>
                    
                    <input 
                        type='checkbox' 
                        onChange={this.handleChange}
                        name='isVegan'
                        checked={this.state.isVegan}
                    />
                    Vegeterian
                </label>

                <br/>

                <label>

                    <input 
                        type='checkbox' 
                        onChange={this.handleChange}
                        name='isKosher'
                        checked={this.state.isKosher}
                    />
                    Kosher

                </label>

                <br/>

                <label>

                    <input 
                        type='checkbox' 
                        onChange={this.handleChange}
                        name='isLactose'
                        checked={this.state.isLactose}
                    />
                    Lactose

                </label>

                <br/>
                
                <h3>Select Your Gender:</h3>

                <label>

                    <input 
                        type='radio'
                        onChange={this.handleChange}
                        name='gender'
                        value='male'
                        checked={this.state.gender ==='male'}
                    /> Male

                </label>
                <br/>

                <label>

                    <input 
                        type='radio'
                        onChange={this.handleChange}
                        name='gender'
                        value='female'
                        checked={this.state.gender ==='female'}
                    /> Female

                </label>
                <br/>

                <label>

                    <input 
                        type='radio'
                        onChange={this.handleChange}
                        name='gender'
                        value='Other'
                        checked={this.state.gender ==='Other'}
                    /> Other

                </label>

                <br/>

                <select 

                    name='locationTravelling' 
                    onChange={this.handleChange} 
                    value={this.state.locationTravelling}>

                    <option value='america'>
                        America
                    </option>

                    <option value='australia'>
                        Australia
                    </option>

                    <option value='antartica'>
                        Antartica
                    </option>

                </select>

                <h1>

                    Entered Details: <br/>

                    <hr/>
                    FirstName:{this.state.firstName} <br/>

                    LastName:{this.state.lastName} <br/>

                    Your Age: {this.state.ageNumber} <br/>

                    Vegan:{this.state.isVegan ? 'Yes' : 'No'} <br/>

                    Kosher:{this.state.isKosher ? 'Yes' : 'No'} <br/>

                    Lactose:{this.state.isLactose ? 'Yes' : 'No'} <br/>

                    You are a {this.state.gender} <br/>

                    You are travelling to {this.state.locationTravelling}

                </h1>

                <button>
                    Submit
                </button>

            </form>
        )
    }
}
export default Travel