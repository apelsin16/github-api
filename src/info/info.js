import React, { Component } from 'react';
import Spinner from './../spinner/spinner';

export default class Info extends Component {

    state = {
        data: null
      };
  
    componentDidMount() {
        fetch(this.props.info)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;

        if (!data) {
            return <Spinner />;
          }

          return (
            <>
                <p>Name: {data.name}</p>
                <p>Company: {data.company}</p>
                <p>Bio: {data.bio}</p>
            </>)
          
    }
    
}