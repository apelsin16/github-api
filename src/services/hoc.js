import React, { Component } from 'react';

import Spinner from '../spinner';



const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
        fetch('https://api.github.com/search/users?q=location:kyiv+followers:%3E=300')
        .then(res => {
          if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
          return res.json()})
        .then(data => this.setState({ data }))
        .catch(err => console.error(err));
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;