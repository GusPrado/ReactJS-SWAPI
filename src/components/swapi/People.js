import React, { Component } from 'react'

import { getPeople } from '../../service/people'
//import PeopleList from './PeopleList'

class PeopleSearch extends Component {
    constructor(props){
        super(props) 
        this.state = {
            person: [],
            character: ''
        }
    }
    


    componentDidMount(){
        //getPeople('gusprado').then(res => console.log(res.data))
        getPeople(2).then(res => this.setState({person: res.data}))
    }

    

    render(){
        const { person } = this.state
        return (
            <>
                <h1>DATA: {this.state.person.name}</h1>
                <div><pre>{JSON.stringify(person, null, 2)}</pre></div>
            </> 
         
        )
    }
}

export default PeopleSearch

//<h2>SW Character: {this.person.name}</h2>
 //           <h3>Other info: </h3>
  //          <p>{this.person}</p>