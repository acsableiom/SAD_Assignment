import React, { Component } from 'react';
import SoftwareFunction from './SoftwareFunction';

class SoftwareClass extends Component {
   constructor(props) {
       super(props);
       this.state = {
        software: [],
        error: null
   };
   
   } 

   render() {
    let data = this.state.software || {};
    return (
        <div>
            <p>Here are the students</p>
            <ul>
                {data}
            </ul>
        </div>
    );
}
componentDidMount() {
    fetch('/courses/software')
    .then(data => data.json())
    .then(res => {
        if (res.error)
            this.setState({ error: res.message });

        let temp = [];
        res.forEach(item => {
            temp.push(
                <SoftwareFunction
                    id = {item._id}
                    firstname = {item.firstname}
                    lastname = {item.lastname}
                    present = {item.present}
                />
            );
        });
        this.setState( {software: temp} );
    });
}

}

export default SoftwareClass

